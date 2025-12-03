// import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import Footer from "./Components/Footer.jsx";
import NoteDetail from "./Components/NoteDetail.jsx";
import { MenuItem } from "./Components/Menu.jsx";
import { useState } from "react";

function BadPractice() {
  const [select, setSelect] = useState(0);

  function handleClick() {
    console.log("Button clicked!");
    setSelect(select + 1);
  }

  return (
    <div>
      <h1>Bad Practice Component</h1>
      <p>The selected item is: {select}</p>
      <button onClick={handleClick}>Select Item 1</button>
    </div>
  );
}

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
      <BadPractice />

      <Footer />
    </>
  );
}

export default App;
