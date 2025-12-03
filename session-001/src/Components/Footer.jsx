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
export default Footer;
