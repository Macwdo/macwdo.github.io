import "./locations.css";

export default function Location() {
  return (
    <section id="location" className="section soccer-camp-image-bg">
      <div className="main-content ">
        <div className="location-container">
          <div className="location-text">
            <h1>Estrutura</h1>
            <p>
              O grupo realiza a locação mensal de um campo society, localizado
              no Clubo Novo Rio (mapa ao lado) com a finalidade de receber seus
              convidados e amigos para uma partida amistosa de futebol
              semanalmente.
              <br />
              <br />É cobrada uma taxa dos mensalistas de R$ 70 para manutenção
              mensal do campo. Convidados que quiserem participar uma vez paga o
              valor de R$ 20 pelo dia.
            </p>
            <h2>Faça sua visita</h2>
          </div>
          <div className="location-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.913600920823!2d-43.4766892!3d-23.0153846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bc2a98a71ecb1%3A0x111687162a52c4de!2sNovo%20Rio%20Country%20Clube!5e0!3m2!1spt-BR!2sbr!4v1701885368027!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="map-frame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
