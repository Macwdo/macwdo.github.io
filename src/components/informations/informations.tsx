import "./informations.css";
import instagramSvg from "../../img/Instagram_logo_2022.svg";
import whatsappSvg from "../../img/WhatsApp-GreenSquare-Logo.wine.svg";
import pdfSvg from "../../img/pdf-svgrepo-com.svg";


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
              <a href="https://wa.me/5521970116252?text=Vim do site">
                <h2>Whatsapp (Diretor Geral)</h2>
                <img src={whatsappSvg} alt={whatsappSvg} className="wpp-svg" />
              </a>
            </div>
            <div className="info-footer-text">
              <a href="https://drive.usercontent.google.com/download?id=1GZowi6es49FB9_AHoYrFg-VzfOZ_yQaV&export=download&authuser=0">
                <h2>Estatuto (Conjunto de Regras)</h2>
                <img src={pdfSvg} alt={pdfSvg} className="wpp-svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="section-2 primary-bg">
        <div className="main-content">
          <h1>Sobre</h1>
          <br />
          <p>
          Sediada no prestigiado Novo Rio Country Club, situado no Recreio dos Bandeirantes, nossa agremiação reserva treinamentos exclusivos aos membros mensalistas, mas também abre oportunidades para convidados mediante convites e disponibilidade.
          <br/>
          <br/>
          Para manutenção do esporte, é estipulada uma taxa simbólica de R$ 20,00 por jogo, a qual contribui para as despesas operacionais associadas ao futebol. As vagas para integrar o grupo de mensalistas estão abertas ao público em geral, permitindo que qualquer interessado se candidate. No caso de limitação de vagas, os candidatos não selecionados terão a possibilidade de ingressar em uma lista de espera.
          <br/>
          <br/>
          A contribuição mensal para os mensalistas é fixada em R$ 70,00 por pessoa, valor que abrange os custos associados à infraestrutura, equipamentos e demais necessidades inerentes à manutenção da equipe. Essa taxa proporciona aos membros uma participação ativa nos treinos regulares e na dinâmica competitiva do Fut 7.
          <br/>
          <br/>
          Estamos comprometidos em oferecer uma experiência esportiva gratificante e inclusiva a todos os integrantes do time. Em caso de dúvidas ou interesse em candidatar-se, por favor, entre em contato para obter mais informações sobre o processo de inscrição e as condições de participação.
          <br/>
          <br/>
          Agradecemos pelo interesse em nossa equipe de Fut 7 amador e esperamos contar com sua presença para fortalecermos ainda mais nossa comunidade esportiva.
          <br/>
          <br/>

          Brotherhoods FC.
          </p>
        </div>
      </section>
    </>
  );
}
