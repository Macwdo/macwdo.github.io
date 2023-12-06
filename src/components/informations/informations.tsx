import "./informations.css";
import instagramSvg from "../../img/Instagram_logo_2022.svg";
import whatsappSvg from "../../img/WhatsApp-GreenSquare-Logo.wine.svg";

export default function Informations() {

  return (
    <section id="info" className="section primary-bg">
      <div className="main-content">
        <div className="info-title container">
          <h1>Siga a gente nas redes sociais</h1>
        </div>

        <div className="info-text">
          <p>
            Nossos treinos acontencem toda quarta ás 19:00.
            Estamos Localizados no Recreio dos bandeirantes, mais especificamente no clube
            Novo Rio Country Club
          </p>
        </div>
        <div className="info-footer container">
        <div className="info-footer-text container">
            <a
              href="#location"
            >
              <h2>Localização</h2>
            </a>
          </div>
          <div className="info-footer-text container">
            <a
              href="https://www.instagram.com/futebolbrotherhoods/"
              target="_blank"
            >
              <h2>Instagram</h2>
              <img src={instagramSvg} alt={instagramSvg} className="ig-svg" />
            </a>
          </div>
          <div className="info-footer-text container">
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
