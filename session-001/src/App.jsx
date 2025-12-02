import { useState } from 'react'
import './App.css'
import MBDS_Logo from './assets/MBDS_Logo.png'

function Header() {
  return (
    <header>
      <img 
        src={MBDS_Logo} 
        alt="Logo MBDS"
        className="logo"
      />

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
  const Heure =DateComplete.getHours();
  const Minute = String(DateComplete.getMinutes()).padStart(2,'0');
  const Second = String(DateComplete.getSeconds()).padEnd(2,'0');

  return(
  <>
    <p>Bonjour, on est le {Jour}, {Mois}, {Annee} et il est {Heure}:{Minute}:{Second}</p>
  </>
  )
}

function Footer() {
  const Nom = "Pierre";
  const Prenom = "Dawens H.";
  return (
    <footer className='footer'>
      Tous droits reserves - {Nom } {Prenom}
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App;
