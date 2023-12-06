import "./App.css";
import ContactForm from "./components/form/form";
import Gallery from "./components/gallery/gallery";
import Navbar from "./components/navbar/navbar";
import TeamImage from "./components/teamImage/teamImage";
import mainImage from "./img/logo-bh-svg.svg";

import teamImage1 from "./img/team_image1.jpeg";
import teamImage2 from "./img/team_image2.jpeg";
import teamImage3 from "./img/team_image3.jpeg";


function App() {
  const slideImages: string[] = [
    teamImage1, teamImage2, teamImage3
  ];


  return (
    <>
    <Navbar/>
      <div className="navbar-space"></div>
    <TeamImage/>
    <Gallery images={slideImages}/>
    <ContactForm/>
    </>
  );
}

export default App;
