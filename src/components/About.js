import React from "react";

const Background = () => {
  return (
    <section className="section background" id="about">
      <div className="section-title-background">ABOUT</div>
      <div className="section-content-background">
        <p>
          {" "}
          I recently completed an{" "}
          <a
            href="https://www.qmul.ac.uk/postgraduate/taught/coursefinder/courses/bioinformatics-msc/"
            target="_blank"
            rel="noopener noreferrer"
            className="uni-link"
          >
            MSc in Bioinformatics
          </a>{" "}
          from Queen Mary University of London. Where I developed an interest in
          Web Development.
        </p>
        <p>
          I love creating beautiful interfaces, web apps, and everything in
          between! My passion is combining my technical knowledge with my keen
          eye for design.
        </p>

        <p className="hobbies">
          When I'm not in front of a computer screen, I'm probably jogging{" "}
          <span className="emoji">🏃🏾‍♂️</span>, cycling{" "}
          <span className="emoji">🚴🏾</span>, attempting to cook something
          delicious <span className="emoji">🧑🏾‍🍳 </span> or supporting Liverpool
          F.C. <span className="emoji">⚽</span>
        </p>
      </div>
    </section>
  );
};

export default Background;
