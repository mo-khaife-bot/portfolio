import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title-background">BACKGROUND</div>
      <div className="section-content-background">
        <p>
          I recently graduated from Queen Mary University of London after
          completing an{" "}
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
        <a
          className="arrow-link"
          href="https://drive.google.com/file/d/1wPFif681hYTbExjVcNWGq9SDaEl5uPKr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </section>
  );
};

export default Background;
