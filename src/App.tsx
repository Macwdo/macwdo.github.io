import "./App.css";
import Gallery from "./components/clothes/clothes";
import Informations from "./components/informations/informations";
import Location from "./components/location/location";
import Navbar from "./components/navbar/navbar";
import TeamImage from "./components/teamImage/teamImage";

import teamClothesImage2 from "./img/team_clothes/completo-insta-principal-verso.fw.png";
import teamClothesImage3 from "./img/team_clothes/completo-insta-principal.fw.png";
import teamClothesImage4 from "./img/team_clothes/completo-insta-verso.fw.png";
import teamClothesImage5 from "./img/team_clothes/completo-insta.fw.png";
import teamClothesImage6 from "./img/team_clothes/detalhes-1.fw.png";
import teamClothesImage7 from "./img/team_clothes/detalhes-2.fw.png";
import teamClothesImage8 from "./img/team_clothes/detalhes-principal-1.fw.png";
import teamClothesImage9 from "./img/team_clothes/detalhes-principal-2.fw.png";
import teamClothesImage10 from "./img/team_clothes/produto oficial.fw.png";
import TeamGallery from "./components/teamGallery/teamGallery";
import Footer from "./components/footer/footer";
import BestPlayers from "./components/best-players/bestPlayers";

function App() {
  const teamClothesImages = [
    [teamClothesImage3, teamClothesImage2, teamClothesImage8],
    [teamClothesImage9, teamClothesImage5, teamClothesImage4],
    [teamClothesImage6, teamClothesImage7, teamClothesImage10],
    [],
  ];

  return (
    <>
      <Navbar />
      <TeamImage />
      <TeamGallery/>
      <BestPlayers/>
      <Informations />
      <div id="clothes" className="section white-bg">
        <div className="main-content">
          <h1 className="container">Nossos Uniformes</h1>
          {teamClothesImages.map((images) => (
            <Gallery images={images} />
          ))}
        </div>
      </div>
      <Location/>
      <Footer/>
    </>
  );
}

export default App;
