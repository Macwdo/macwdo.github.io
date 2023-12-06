import mainImage from "../../img/logo-bh-svg.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <section className="navbar">
        <nav className="navbar-content">
          <a href="#" className="navbar-title container">
            <h1>Brotherhoods</h1>
            <img
              src={mainImage}
              alt="brotherhoods_image"
              className="navbar-logo"
            />
          </a>
          <ul className="navbar-list">
            <li>
              <a href="#gallery">Galeria</a>
            </li>
            <li>
              <a href="#info">Informações</a>
            </li>
            <li>
              <a href="#clothes">Uniformes</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>
              <a href="#location">Localização</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
