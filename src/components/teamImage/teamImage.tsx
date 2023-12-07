import mainImage from "../../img/logo-bh-svg.svg";
import "./teamImage.css";


export default function TeamImage() {
  return (
    <section id="home" className="section soccer-camp-image-bg container">
      <div className="main-content">
        <div className="team-image-title team-image-container">
          <img
            src={mainImage}
            alt="brotherhoods_image"
            className="team-image-logo"
          />
          <h1>Brotherhoods</h1>
        </div>
      </div>
    </section>
  );
}
