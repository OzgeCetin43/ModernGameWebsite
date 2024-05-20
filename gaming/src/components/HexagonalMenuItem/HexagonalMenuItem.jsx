import { NavLink } from "react-router-dom";

import "./HexagonalMenuItem.css";

const HexagonalMenuItem = ({ item, showNavbar }) => {
  return (
    <div key={item.id} className="hexagon-item">
      <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavLink className="hex-content" to={item.path} onClick={showNavbar}>
        <span className="hex-content-inner">
          <span className="title">{item.label}</span>
        </span>
        <svg
          viewBox="0 0 173.20508075688772 200"
          height="200"
          width="174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
            fill="#1e2530"
          ></path>
        </svg>
      </NavLink>
    </div>
  );
};

export default HexagonalMenuItem;
