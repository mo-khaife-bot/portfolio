import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="top">
          <span>Created by </span>
        </div>
        <div className="bottom">
          <span> Mo Khaife Ali 👋🏾 </span> <span>2022</span>
        </div>
      </div>

      <div className="footer-links">
        <a
          href="mailto:mokhaife.ali@gmail.com"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">email</span>
        </a>
        <a
          href="https://github.com/MuhammadAli-ai"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">github</span>
        </a>
        {/* <a
          href="https://www.linkedin.com/in/karantondare/"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">linkedin</span>
        </a> */}
        <a
          href="https://twitter.com/Khaife_Codes"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
