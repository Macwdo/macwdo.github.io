import "./informations.css";
import instagramSvg from "../../img/Instagram_logo_2022.svg";
import whatsappSvg from "../../img/WhatsApp-GreenSquare-Logo.wine.svg";

export default function Informations() {
  return (
    <>
      <section id="info" className="section-2 secondary-bg">
        <div className="main-content">
          <div className="info-title container">
            <h1>Cante com a gente!</h1>
          </div>

          <div className="info-text">
            <p>
              <i>
                <center>
                  HUHU, BROTHERHOODS! <br />
                  CORAÇÃO, BROTHERHOODS!
                  <br />
                  IRMANDADE, BROTHERHOODS!
                  <br />
                  ATÉ O FIM, BROTHERHOODS!
                </center>
                <br />
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
            <div className="info-footer-text">
              <a href="#">
                <h2>Baixar o livro de regras</h2>
                <img src={whatsappSvg} alt={whatsappSvg} className="wpp-svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="section-2 primary-bg">
        <div className="main-content">
          <h1>Estrutura</h1>
          <p>
            O grupo realiza a locação mensal de um campo society, localizado no
            Clubo Novo Rio (mapa ao lado) com a finalidade de receber seus
            convidados e amigos para uma partida amistosa de futebol
            semanalmente.
            <br />
            <br />É cobrada uma taxa dos mensalistas de R$ 70 para manutenção
            mensal do campo. Convidados que quiserem participar uma vez paga o
            valor de R$ 20 pelo dia.
          </p>
          <h2>Faça sua visita</h2>
        </div>
      </section>
    </>
  );
}
