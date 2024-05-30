import circle from "../../assets/images/circle-shape.png";
import hero from "../../assets/images/awards-hero.png";

import { awards } from "../../assets/data/awards";

import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards-container">
      <div className="awards-container-left">
        <img src={circle} alt="circle" />
        <img src={hero} alt="award hero" />
      </div>
      <div className="awards-container-right">
        <small className="awards-subtitle">#Awards</small>
        <h1 className="awards-title">Game of the year</h1>
        <div className="award-items">
          {awards.map((item) => (
            <img key={item.id} src={item.image} alt="award" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
