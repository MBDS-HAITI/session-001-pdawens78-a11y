import "../App.css";

function NoteDetail({ item }) {
  if (!item || !item.student) return <p>Données manquantes</p>;
  return (
    <div className="note-card">
      <h3>{item.course}</h3>
      <p>
        <strong>Étudiant :</strong> {item.student.firstname}{" "}
        {item.student.lastname}
      </p>
      <p>
        <strong>Date :</strong> {item.date}
      </p>
      <p>
        <strong>Note :</strong> {item.grade} / 100
      </p>
    </div>
  );
}

export default NoteDetail;
