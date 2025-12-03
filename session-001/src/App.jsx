// import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import Footer from "./Components/Footer.jsx";
import NoteDetail from "./Components/NoteDetail.jsx";
import { MenuItem } from "./Components/Menu.jsx";

// Fonction pour choisir un élément au hasard
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function handleClick() {
  console.log("Button clicked!");
}

function App() {
  const randomItem = getRandomItem(data);
  return (
    <>
      <Header />
      {/* <MainContent />
      <NoteDetail item={randomItem} /> */}
      <MenuItem title="Etudiants" onClick={handleClick} />
      {/* <MenuItem title="Etudiants" onClick={() => {console.log("Home clicked");}}/> */}
      <MenuItem title="Matières" onClick={handleClick} />
      <MenuItem title="Notes" onClick={handleClick} />
      <MenuItem title="A propos" onClick={handleClick} />

      <Footer />
    </>
  );
}

export default App;
