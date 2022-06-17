import React from "react";
import CustomProject from "../customHook/CustomProject";

import SportsBetDesktopImg from "../img/sportsbet-desktop.png";
import SportsBetMobileImg from "../img/sportsbet-mobile.png";
import worldRankDesktopImg from "../img/worldRanksDesktop.gif";
import portfolioMobileImg from "../img/portfolio-mobile.gif";
import commingSoonImg from "../img/coming-soon-page.webp";

const Projects = () => {
  return (
    <div className="anchor">
      <section className="section projects" id="projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
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

          <CustomProject
            title="Portfolio site"
            linkCode="https://github.com/mo-khaife-bot/portfolio"
            linkLive="https://mo-khaife-ali.netlify.app"
            imgDesktop={portfolioMobileImg}
            desc="This Portfolio site that showcases my Front-end Developer skills. I created the design myself. It houses some of my projects and has information about myself and my contact details. It has a responsive layout for Desktop and Mobile as well as toggle for Dark / Light Mode."
            usedArray={[
              "JavaScript",

              "React-Context-API",
              "React-Custom-Hook",
              "CSS",
            ]}
          />
          <CustomProject
            title="COMING SOON: E-Commerce site"
            linkCode=""
            linkLive=""
            imgDesktop={commingSoonImg}
            desc="Currently making an E-Commerce project that will be integrated with test Stripe-API to handle payment. Using Firebase to handle authentication and authorize as well as React Routing to enable movement through site"
            usedArray={[
              "JavaScript",
              "React",
              "Firebase",
              "Stripe-API",
              "React-Router",
            ]}
          />
          {/* 
          <CustomProject
            title="Movie Search App"
            link=""
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
    </div>
  );
};

export default Projects;
