import React from "react";

import { FaGithub } from "react-icons/fa";

import { SiTwitter, SiLinkedin } from "react-icons/si";

const Header = () => {
  return (
    <header className="intro">
      <div className="intro-container">
        <h1 className="intro-title-name">Soo Dhawoow &nbsp;✌🏾</h1>
        <h3 class="intro-phonetic-definition">[so-DaWo] &nbsp; Noun</h3>
        <h5 className="intro-definition-example">
          used to express a greeting to a guest or newcomer upon arrival
        </h5>
      </div>
      <h2 className="intro-tagline">
        I'm <span className="name">Mohomed Khaife Ali</span>, a Frontend web
        developer based in <span className="name">London</span> . I love
        creating beautiful interfaces, web apps, and everything in between!
      </h2>
      <div className="intro-contact">
        <a
          href="https://github.com/MuhammadAli-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="social-link" />
        </a>
        <a
          href="https://twitter.com/Khaife_Codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter className="social-link" />
        </a>
        <a
          href="https://twitter.com/Khaife_Codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="social-link" />
        </a>
      </div>
      {/* <div class="social-links">
        <a
          href="https://twitter.com/Khaife_Codes"
          target="_blank"
          class="twitter"
        >
          <i class="bx bxl-twitter"></i>
        </a>
        <a href="#" class="linkedin" target="_blank">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/MuhammadAli-ai"
          target="_blank"
          class="linkedin"
        >
          <i class="bx bxl-github"></i>
        </a>
      </div> */}
    </header>
  );
};

export default Header;
