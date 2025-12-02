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

function Body() {
  return(
  <>
    <p>Ici, nous afficherons des informations interessantes :</p>
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
      <Body />
      <Footer />
    </>
  )
}

export default App;
