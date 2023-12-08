import "./bestPlayers.css";
import top1Player from "../../img/player1.jpeg";
import top2Player from "../../img/player2.png";
import top4Player from "../../img/player4.png";

import PlayerCard from "./player-card";

export default function BestPlayers() {
  const images = [top1Player, top2Player, top4Player];

  return (
    <section id="people" className="section primary-bg">
      <div className="main-content">
        <div className="container">
          <h1>Melhores do ano</h1>
        </div>
        <div className="player-images">
          {images.map((image) => (
            <PlayerCard
              image={image}
              name="Carlinhos"
              text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas voluptatum. 
              "
              title="Melhor"
            />
          ))}
          <div />
        </div>
      </div>
    </section>
  );
}
