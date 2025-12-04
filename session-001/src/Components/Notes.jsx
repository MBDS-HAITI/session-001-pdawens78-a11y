import { useEffect, useState } from "react";

function Notes() {
  const API_URL = "http://localhost:8010/api/grades";

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [ascending, setAscending] = useState(true);

  // Charger les notes depuis MongoDB
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setNotes(result);
      } catch (error) {
        console.error("Erreur récupération des notes :", error);
      }
    };

    fetchNotes();
  }, []);

  // Recherche + tri
  const filtered = notes
    .filter(
      (item) =>
        item.student?.firstName?.toLowerCase().includes(search.toLowerCase()) ||
        item.student?.lastName?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (ascending ? a.grade - b.grade : b.grade - a.grade));

  return (
    <div>
      <h2>Notes</h2>

      <input
        className="search-input"
        placeholder="Rechercher un étudiant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Étudiant</th>
            <th>Matière</th>
            <th
              onClick={() => setAscending(!ascending)}
              className="sortable"
              style={{ cursor: "pointer" }}
            >
              Note {ascending ? "▲" : "▼"}
            </th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item._id}>
              <td>
                {item.student?.firstName} {item.student?.lastName}
              </td>
              <td>{item.course?.name || item.course}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && <p>Aucune note trouvée.</p>}
    </div>
  );
}

export default Notes;
