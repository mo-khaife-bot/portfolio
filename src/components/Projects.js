import React from "react";
import CustomProject from "../customHook/CustomProject";

import SportsBetDesktopImg from "../img/sportsbet-desktop.png";
import SportsBetMobileImg from "../img/sportsbet-mobile.png";
import worldRankDesktopImg from "../img/worldRanksDesktop.gif";

const Projects = () => {
  return (
    <>
      <section className="section projects" id="projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <CustomProject
            title="Sports Odds"
            linkCode="https://github.com/mo-khaife-bot/sports-odds-collection-demo"
            linkLive="https://sports-odds-collection-demonstration.netlify.app/"
            imgDesktop={SportsBetDesktopImg}
            imgMobile={SportsBetMobileImg}
            desc="A React app that uses the Live Odds API from RapidAPI to show the sports odds for Premier League, NBA, MLB NFL & NHL games. Styled using SASS & Bootstrap icons."
            usedArray={[
              "JavaScript",
              "React",
              "SASS",
              "Bootstrap",
              "HTML",
              "CSS",
              "REST-API",
            ]}
          />
          {/* <hr className="zig-zag"></hr> */}

          <CustomProject
            title="World Ranks"
            linkCode="https://github.com/mo-khaife-bot/nextjs-world-ranks"
            linkLive="https://world-ranking-dashboard.netlify.app/"
            imgDesktop={worldRankDesktopImg}
            desc="A responsive Next.JS app that uses a REST API to filter/search specific countries/regions and rank countries by population and size, it also shows specific info about each country"
            usedArray={[
              "JavaScript",
              "React",
              "Next.JS",
              "Material-UI",
              "React-Leaflet",
              "REST-API",
            ]}
          />
          {/* <CustomProject
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
    </>
  );
};

export default Projects;
