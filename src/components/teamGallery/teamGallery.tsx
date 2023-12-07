import { useState } from "react";
import "./teamGallery.css";

import imageTest from "../../img/team_image1.jpeg";
import imageTest1 from "../../img/team_image2.jpeg";

export default function TeamGallery() {
  const backgroundImagesClasses = [
    "team-image1-bg",
    "team-image2-bg",
    "team-image3-bg",
  ];

  const [backgroundImageClass, setBackgroundImageClass] = useState(
    backgroundImagesClasses[0]
  );

  const changeImage = (): void => {
    if (backgroundImageClass === backgroundImagesClasses[2])
      setBackgroundImageClass(backgroundImagesClasses[0]);
    else {
      const currentIndex =
        backgroundImagesClasses.indexOf(backgroundImageClass);
      setBackgroundImageClass(backgroundImagesClasses[currentIndex + 1]);
    }
  };

  return (
    <>
      <section id="gallery" className="section white-bg">
        <div className="main-content">
          <div className="team-gallery-title container">
            <h1>Nossa Galeria</h1>
          </div>
          <div
            onClick={changeImage}
            className={`team-gallery-content ${backgroundImageClass}`}
          ></div>
          <div className="image-crop">
            {/* <img src={imageTest} alt={imageTest} className="test-image" /> */}
            {/* <img src={imageTest1} alt={imageTest1} className="test-image" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
