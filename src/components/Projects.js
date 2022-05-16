import React from "react";
import CustomProject from "../customHook/CustomProject";

import sportsImg from "../img/sportsbet-project-main.png";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <CustomProject
            title="Sports-Book Betting Collection"
            linkCode="https://github.com/MuhammadAli-ai/sports-odds-collection-demo"
            linkLive="https://sports-odds-collection-demonstration.netlify.app/"
            imgLink={sportsImg}
            desc="A web app that uses the Live Odds API from RapidAPI to show you sports odds for the Premier League, NBA, MLB NFL & NHL."
            usedArray={["JavaScript", "React", "Bootstrap"]}
          />
          {/* <CustomProject
            title="Instalike"
            link="https://github.com/karantondare/instalike"
            desc="Fullstack social media app to share your memories with CRUD functionality. You can create your posts and like other peoples people."
            usedArray={[
              "JavaScript",
              "React",
              "Redux",
              "Express",
              "MongoDB",
              "Material UI",
            ]}
          />
          <CustomProject
            title="Kitab Khana"
            link="https://github.com/karantondare/kitab-khana"
            desc="A full stack eCommerce website to purchase books with an admin panel to manage the orders and inventory."
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          />
          <CustomProject
            title="Movie Search App"
            link="https://github.com/karantondare/react-rmdb-movie-app"
            desc="Find the latest trending movies to binge watch on your weekend!"
            usedArray={[
              "JavaScript",
              "React",
              "React Router",
              "TMDb API",
              "Styled-Components",
            ]}
          /> */}
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/MuhammadAli-ai"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Check my other projects on github.</h3>
        </a>
      </div>
    </>
  );
};

export default Projects;
