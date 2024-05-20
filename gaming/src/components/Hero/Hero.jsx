import { FaPlay } from "react-icons/fa";

import hero from "../../assets/images/home-hero.png";
import zelda from "../../assets/images/zelda.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        <h1>Enjoy the game</h1>
        <img src={zelda} alt="zelda" className="hero-logo" />
        <p>Available now</p>
        <div className="hero-video-container">
          <FaPlay />
          <h2>Official trailer</h2>
        </div>
        <div className="hero-container-actions">
          <button className="hero-container-button">
            <span>Purchase now</span>
          </button>
          <button className="hero-container-button">
            <span>Free trial</span>
          </button>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
