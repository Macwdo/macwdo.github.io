import "./bestPlayers.css";
import PlayerCard from "./player-card";

export default function BestPlayers() {

  // const general_director = {
  //   name: "Daniel Macedo",
  //   picture: general_director_image,
  //   title: "Diretor Geral",
  //   text: "Responsável pelo planejamento e financeiro do futebol."
  // }

  const entertainment_director = {
    name: "Victor Hugo",
    picture: "entertainment-director-image",
    title: "Diretor de Eventos e entretenimento",
    text: "Responsável pelo planejamento das comemorações mensais e confraternizações anuais."
  }

  const products_director = {
    name: "Adilson Junior",
    picture: "products-director-image",
    title: "Diretor de Produtos",
    text: "Responsável pelo orçamento e aquisição dos produtos relativos ao futebol."
  }

  const external_relations_director = {
    name: "Carlos Zattera",
    picture: "external-relations-director-image",
    title: "Relações Externas",
    text: `
      Responsável por realizar parcerias,
      planejar jogos amistosos e inscrições 
      em campeonatos amadores em nome do time
    `
  }

  const directors = [external_relations_director, products_director, entertainment_director]

  return (
    <section id="people" className="section primary-bg">
      <div className="main-content">
        <div className="container">
          <h1>Diretoria Colaborativa</h1>
        </div>
        <div className="player-images">
          {directors.map((director) => (
            <PlayerCard
              image={director.picture}
              name={director.name}
              title={director.title}
              text={director.text}
            />
          ))}
          <div />
        </div>
      </div>
    </section>
  );
}
