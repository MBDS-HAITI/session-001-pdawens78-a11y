import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Menu } from "./Components/Menu";
import Matieres from "./Components/Matieres";
import Etudiants from "./Components/Etudiants";
import Notes from "./Components/Notes";
import APropos from "./Components/APropos";
import { useState } from "react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Matieres");

  function renderContent() {
    switch (selectedMenu) {
      case "Matieres":
        return <Matieres />;
      case "Etudiants":
        return <Etudiants />;
      case "Notes":
        return <Notes />;
      case "A Propos":
        return <APropos />;
      default:
        return <h2>Contenu du menu sélectionné</h2>;
    }
  }

  return (
    <div className="app">
      <Header />
      <Menu onSelect={(menu) => setSelectedMenu(menu)} />
      <div className="content">{renderContent()}</div>
      <Footer />
    </div>
  );
}

export default App;
