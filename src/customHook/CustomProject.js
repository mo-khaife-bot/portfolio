import React from "react";

const CustomProject = ({
  title,
  linkCode,
  linkLive,
  imgLink,
  desc,
  usedArray,
}) => {
  return (
    <div className="project">
      <div className="project-name">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>

          <div className="code-link">
            <a
              href={linkCode}
              target="_blank"
              rel="noopener noreferrer"
              className="code-link-item"
            >
              Github Code
            </a>
          </div>

          <div className="demo-link">
            <a
              href={linkLive}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link-item"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="img-overlay">
          <img className="project-img" src={imgLink} alt="" />
        </div>
      </div>

      {/* make used buttons larger and font larger */}
      <span className="project-description">{desc}</span>
      <div className="project-used">
        {usedArray.map((used, index) => {
          return (
            <span key={index} className="project-used-item">
              {used}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default CustomProject;
