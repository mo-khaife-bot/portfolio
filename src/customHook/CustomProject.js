import React from "react";

const CustomProject = ({
  title,
  linkCode,
  linkLive,
  imgDesktop,
  imgMobile,
  desc,
  usedArray,
}) => {
  return (
    <div className="project">
      <div className="project-name">
        <div className="project-header">
          <h3 className="project-title">
            <a href={linkLive}>{title}</a>
          </h3>

          <div className="project-links">
            {linkCode && (
              <a
                href={linkCode}
                target="_blank"
                rel="noopener noreferrer"
                className="code-link-item"
              >
                Code
              </a>
            )}
            {linkLive && (
              <a
                href={linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link-item"
              >
                Website
              </a>
            )}
          </div>
        </div>

        <div className="img-overlay">
          <a
            href={linkLive}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-link-item"
          >
            <img className="project-img-desktop" src={imgDesktop} alt="" />
            {imgMobile && (
              <img className="project-img-mobile" src={imgMobile} alt="" />
            )}
          </a>
        </div>
      </div>

      {/* make used buttons larger and font larger */}
      <p className="project-description">{desc}</p>
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
