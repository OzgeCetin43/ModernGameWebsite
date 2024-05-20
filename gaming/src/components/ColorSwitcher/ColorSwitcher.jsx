import { IoSettings } from "react-icons/io5";

import "./ColorSwitcher.css";
import { useEffect, useState } from "react";

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    "#45F882",
    "#0dcaf0",
    "#6240CF",
    "#ff0037",
    "#ffc107",
    "#d63384",
  ];

  useEffect(() => {
    setTheme("#ff0037");
  }, []);

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--theme-color", color);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--theme-color");
    setTheme(currentColor);
  };

  return (
    <div
      className={
        isOpen
          ? "color-switcher-container color-switcher-container-open"
          : "color-switcher-container"
      }
    >
      <IoSettings onClick={() => setIsOpen((prev) => !prev)} />
      <div className="color-list">
        {colors.map((item, index) => (
          <div
            key={index}
            className="color-item"
            style={{ "--theme-color": item }}
            onClick={(e) => {
              setColor(e);
              setIsOpen((prev) => !prev);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSwitcher;
