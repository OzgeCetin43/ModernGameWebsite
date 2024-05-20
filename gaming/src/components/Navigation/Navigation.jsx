import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";

import HexagonalMenuItem from "../HexagonalMenuItem/HexagonalMenuItem";

import logo from "../../assets/images/logo.png";

import { menuFirst, menuLast } from "../../assets/data/menu";

import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current?.classList?.toggle("responsive-nav");
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <CgMenuGridO className="menu-toggler" onClick={showNavbar} />
      </div>
      {isOpen ? (
        <div className="menu-container">
          <div className="hexagon-area first">
            {menuFirst.map((item) => (
              <HexagonalMenuItem
                key={item.id}
                item={item}
                showNavbar={showNavbar}
              />
            ))}
          </div>
          <div className="hexagon-area last">
            {menuLast.map((item) => (
              <HexagonalMenuItem
                key={item.id}
                item={item}
                showNavbar={showNavbar}
              />
            ))}
          </div>
        </div>
      ) : null}
      {isOpen ? (
        <div className="mobile-menu">
          <nav ref={navRef} className="mobile-menu-navbar">
            {menuFirst.map((item) => (
              <NavLink key={item.id} to={item.path} onClick={showNavbar}>
                {item.label}
              </NavLink>
            ))}
            {menuLast.map((item) => (
              <NavLink key={item.id} to={item.path} onClick={showNavbar}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
