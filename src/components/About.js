import React from "react";

const Background = () => {
  return (
    <section className="section background" id="about">
      <div className="section-title-background">ABOUT</div>
      <div className="section-content-background">
        <p>
          I love creating beautiful interfaces, web apps, and everything in
          between!{" "}
        </p>

        <p>
          {" "}
          I recently completed an{" "}
          <a
            href="https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/bioinformatics-msc/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            MSc in Bioinformatics
          </a>{" "}
          .
        </p>
        <p>
          My passion is combining my technical knowledge with my keen eye for
          design to create a beautiful product. My goal is to always build
          applications that are scalable and efficient under the hood while
          providing engaging, pixel-perfect user experiences.
        </p>
        <p>
          <strong>When I'm not in front of a computer screen</strong>, I'm
          probably jogging 🏃🏾, cooking something delicious 🧑🏾‍🍳 or supporting
          Liverpool F.C. ⚽
        </p>
      </div>
    </section>
  );
};

export default Background;
