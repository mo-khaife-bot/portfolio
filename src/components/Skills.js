import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNpm,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPython, SiRedux, SiBootstrap, SiFlask } from "react-icons/si";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="section-title">SKILLS</div>
      <div className="section-content section-icons">
        <div className="icon-hover">
          {" "}
          <FaHtml5 className="icon-logo" />
          <p className="icon-name">HTML5</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaCss3 className="icon-logo" />
          <p className="icon-name">CSS3</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaJsSquare className="icon-logo" />
          <p className="icon-name">JavaScript</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaReact className="icon-logo" />
          <p className="icon-name">React</p>
        </div>
        <div className="icon-hover">
          {" "}
          <SiRedux className="icon-logo" />
          <p className="icon-name">Redux</p>
        </div>

        <div className="icon-hover">
          {" "}
          <FaNode className="icon-logo" />
          <p className="icon-name">Node.JS</p>
        </div>
        <div className="icon-hover">
          {" "}
          <SiPython className="icon-logo" />
          <p className="icon-name">Python</p>
        </div>
        <div className="icon-hover">
          {" "}
          <SiBootstrap className="icon-logo" />
          <p className="icon-name">Bootstrap</p>
        </div>
        <div className="icon-hover">
          {" "}
          <SiFlask className="icon-logo" />
          <p className="icon-name">Flask</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaNpm className="icon-logo" />
          <p className="icon-name">NPM</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaGitAlt className="icon-logo" />
          <p className="icon-name">Git</p>
        </div>
        <div className="icon-hover">
          {" "}
          <FaGithub className="icon-logo" />
          <p className="icon-name">GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
