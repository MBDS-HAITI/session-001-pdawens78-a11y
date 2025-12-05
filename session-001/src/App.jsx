import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Menu } from "./Components/Menu";
import Matieres from "./Components/Matieres";
import Etudiants from "./Components/Etudiants";
import Notes from "./Components/Notes";
import APropos from "./Components/APropos";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Matieres />} />
          <Route path="/courses" element={<Matieres />} />
          <Route path="/students" element={<Etudiants />} />
          <Route path="/grades" element={<Notes />} />
          <Route path="/about" element={<APropos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
