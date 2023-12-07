import "./informations.css";
import instagramSvg from "../../img/Instagram_logo_2022.svg";
import whatsappSvg from "../../img/WhatsApp-GreenSquare-Logo.wine.svg";

export default function Informations() {
  return (
    <section id="info" className="section primary-bg">
      <div className="main-content">
        <div className="info-title container">
          <h1>Participe!</h1>
        </div>

        <div className="info-text">
          <p>
            Nossos treinos acontencem toda quarta das 20h30 às 23h00, atualmente
            no Novo Rio Country Club - Recreio dos bandeirantes.
            <br />
            <br />
            Veja o mapa clicando em "Localização".
            <br />
            <br />
            Acompanhe o Treino nas nossas redes socias abaixo.
            <br />
            <br />
            <i>
              "HUHU É BROTHERHOODS! CORAÇÃO. É BROTHERHOODS! IRMANDADE. É
              BROTHERHOODS!
              <br />
              <br />
              ATÉ O FIM, É BROTHERHOODS!"
            </i>
          </p>
        </div>
        <div className="info-footer container">
          <div className="info-footer-text">
            <a href="#location">
              <h2>Localização</h2>
            </a>
          </div>
          <div className="info-footer-text">
            <a
              href="https://www.instagram.com/futebolbrotherhoods/"
              target="_blank"
            >
              <h2>Instagram</h2>
              <img src={instagramSvg} alt={instagramSvg} className="ig-svg" />
            </a>
          </div>
          <div className="info-footer-text">
            <a href="#">
              <h2>Whatsapp</h2>
              <img src={whatsappSvg} alt={whatsappSvg} className="wpp-svg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
