import React from "react";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="header__logo">
          <span>MKA</span>
        </div>

        <ThemeToggler />

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link highlight-link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link highlight-link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link highlight-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="intro">
        <div className="intro-container">
          <h1 className="landing__heading">
            <div className="landing__heading--name">Mohomed Khaife Ali</div>
          </h1>
        </div>
        <h2 className="intro-tagline">
          I'm a Frontend web developer based in{" "}
          <span className="name">London</span>.
        </h2>
        <h3 className="intro-contact">
          <span>
            Get in touch <span className="emoji">👋🏾</span>
          </span>
          <span>
            <a href="mailto:mokhaife.ali@gmail.com" className="highlight-link">
              mokhaife.ali@gmail.com
            </a>
          </span>
        </h3>
      </main>
    </>
  );
};

export default Header;
