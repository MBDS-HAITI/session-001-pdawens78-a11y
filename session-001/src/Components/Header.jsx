import "../App.css";
import MBDS_Logo from "../assets/MBDS_Logo.png";

function Header() {
  return (
    <header>
      <img src={MBDS_Logo} alt="Logo MBDS" className="logo" />

      <h1>Introduction à React</h1>
      <h2>La découverte des premières notions de React</h2>
    </header>
  );
}
export default Header;
