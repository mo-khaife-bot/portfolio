import React from "react";
import { useContext } from "react";

import { ThemeContext } from "../App";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "light" : "dark"}
      </button>
    </>
  );
};

export default ThemeToggler;
