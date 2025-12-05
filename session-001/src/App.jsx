import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Menu } from "./Components/Menu";
import Matieres from "./Components/Matieres";
import Etudiants from "./Components/Etudiants";
import Notes from "./Components/Notes";
import APropos from "./Components/APropos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Matieres />} />
        <Route path="/courses" element={<Matieres />} />
        <Route path="/students" element={<Etudiants />} />
        <Route path="/grades" element={<Notes />} />
        <Route path="/about" element={<APropos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
