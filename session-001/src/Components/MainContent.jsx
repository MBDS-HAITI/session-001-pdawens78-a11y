import "../App.css";

function MainContent() {
  const DateComplete = new Date();

  const Jour = DateComplete.getDate();
  const Mois = DateComplete.getMonth() + 1;
  const Annee = DateComplete.getFullYear();
  const Heure = DateComplete.getHours();
  const Minute = String(DateComplete.getMinutes()).padStart(2, "0");
  const Second = String(DateComplete.getSeconds()).padStart(2, "0");

  return (
    <>
      <p>
        Bonjour, on est le {Jour}, {Mois}, {Annee} et il est {Heure}:{Minute}:
        {Second}
      </p>
    </>
  );
}
export default MainContent;
