import mainImage from "../../img/logo-bh-svg.svg"
import "./teamImage.css"

export default function TeamImage () {
    return (
        <section id="home" className="section team-image-bg container">
        <div className="main-content">
          <div className="team-image-title container">
            <h1>Brotherhoods</h1>
            <img
              src={mainImage}
              alt="brotherhoods_image"
              className="team-image-logo"
            />
          </div>
        </div>
      </section>
    )
}