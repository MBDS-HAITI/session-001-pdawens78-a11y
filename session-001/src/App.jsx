// import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import Footer from "./Components/Footer.jsx";
import NoteDetail from "./Components/NoteDetail.jsx";

// Fonction pour choisir un élément au hasard
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
function App() {
  const randomItem = getRandomItem(data);
  return (
    <>
      <Header />
      <MainContent />
      <NoteDetail item={randomItem} />
      <Footer />
    </>
  );
}

export default App;
