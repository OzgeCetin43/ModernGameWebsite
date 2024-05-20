import { NavLink } from "react-router-dom";
import hero from "../../assets/images/not-found-hero.svg";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={hero} alt="404 not found" className="not-found-hero" />
      <h1 className="not-found-title">Opp’s that page can’t be found</h1>
      <p className="not-found-description">
        It looks like nothing was found at this location. Maybe try one of the
        links below or a search?
      </p>
      <NavLink className="back-home-button">
        <span>Back to Home</span>
      </NavLink>
    </div>
  );
};

export default NotFound;
