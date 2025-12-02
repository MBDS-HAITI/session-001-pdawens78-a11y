import { useState } from "react";
import "./App.css";
import MBDS_Logo from "./assets/MBDS_Logo.png";
import data from "./data.json";

function Header() {
  return (
    <header>
      <img src={MBDS_Logo} alt="Logo MBDS" className="logo" />

      <h1>Introduction à React</h1>
      <h2>La découverte des premières notions de React</h2>
    </header>
  );
}

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

function Footer() {
  const Nom = "Pierre";
  const Prenom = "Dawens H.";
  const date = new Date();
  const Annee = date.getFullYear();
  return (
    <footer className="footer">
      © {Annee} - {Nom}.{Prenom}, Tous droits réservés.
    </footer>
  );
}

// TD03

// 1. Fonction pour tirer un élément aléatoire
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// 2. Composant qui affiche un item
function NoteDetail({ item }) {
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

// 3. RandomItem qui utilise NoteDetail
function RandomItem() {
  const randomItem = getRandomItem(data);

  return (
    <div>
      <h2>Élément choisi au hasard :</h2>
      <NoteDetail item={randomItem} />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <RandomItem />
    </>
  );
}

export default App;
