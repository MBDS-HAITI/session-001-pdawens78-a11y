import { useEffect, useState } from "react";

function Matieres() {
  const API_URL = "http://localhost:8010/api/courses";

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des matières");
        const result = await response.json();
        setCourses(result);
      } catch (err) {
        console.error("Erreur récupération cours:", err);
      }
    };
    fetchCourses();
  }, []);

  // Filtrage + tri
  const filtered = courses
    .filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className="table-container">
      <h2>Liste des Matières</h2>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher une matière..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        style={{
          padding: "8px",
          marginBottom: "15px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Tableau */}
      <table
        className="table"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1976d2", color: "white" }}>
            <th
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() => setSortAsc(!sortAsc)}
            >
              Matière {sortAsc ? "▲" : "▼"}
            </th>
            <th style={{ padding: "10px" }}>Code</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((course, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>{course.name}</td>
              <td style={{ padding: "8px" }}>{course.code}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && <p>Aucune matière trouvée.</p>}
    </div>
  );
}

export default Matieres;
