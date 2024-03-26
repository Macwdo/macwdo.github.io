
interface PlayerCardProps {
  text: string;
  name: string;
  image: any;
  title: string;
}

export default function PlayerCard(props: PlayerCardProps) {
  return (
    <div className="player-image-flex">
      <div className="player-image-title">
        <h2>{props.title}</h2>
      </div>
      <div className="player-image-container">
        <div className="player-div-image">
          <div className={`director-gallery-content ${props.image}`}></div>
        </div>
        <div className="player-image-text">
          <h2>{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
