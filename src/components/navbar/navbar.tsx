import mainImage from "../../img/logo-bh-svg.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#" className="navbar-title container">
          <img
            src={mainImage}
            alt="brotherhoods_image"
            className="navbar-logo"
          />
          <h1>Brotherhoods</h1>
        </a>
        <ul className="navbar-list">
          {/* <li>
            <a href="#gallery">Galeria</a>
          </li> */}
          <li>
            <a href="#people">Diretoria</a>
          </li>
          <li>
            <a href="#info">Úteis</a>
          </li>
          <li>
            <a href="#clothes">Uniformes</a>
          </li>
          <li>
            <a href="#location">Localização</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}