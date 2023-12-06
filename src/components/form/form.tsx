import "./form.css";
import mainImage from "../../img/logo-bh-svg.svg";

export default function ContactForm() {
  return (
    <>
      <div id="contact" className="section main-bg">
        <div className="main-content">
          <div className="contact-text container">
            <h1>Olá, você quer vir jogar com a gente?</h1>
          </div>
          <div className="contact-form">
            <div className="form-container">
              <div className="form-image">
                <img src={mainImage} alt={mainImage} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" placeholder="Digite seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Número</label>
                <input id="name" type="text" placeholder="Digite seu número" />
              </div>
              <div className="form-group">
                <button>Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
