import Menu from "../menu/Menu";
import ScrollLink from "../scroll-link/ScrollLink";
import photoUrl from "./image/JasonWood.jpg";
import "./AboutMe.scss";



function AboutMe() {

  return (
    <section className="about-me">  
      <Menu />    
      <div className="about-me__inner">
        <div className="about-me__photo">
          <img src={photoUrl} alt="Me" className="about-me__image" />
        </div>
        <div className="about-me__description">
          <h2 className="about-me__title">About me</h2>
          <p className="about-me__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="about-me__text about-me__text--last">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="about-me__name">Jason Wood</p>
        </div>
      </div> 
      <ScrollLink />   
    </section>
  );
}

export default AboutMe;
