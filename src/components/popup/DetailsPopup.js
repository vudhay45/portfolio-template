import useClickOutside from "../../useClickOutside";
import React from 'react';
const DetailsPopup = ({ show, close,project }) => {
    if(!project) return null;
  return (
    <div className={`tonni_tm_modalbox ${show ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a className="c-pointer" onClick={close}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={project.image.url} alt="" />
              <div
                className="main"
                data-img-url={project.image.url}
                style={{ backgroundImage: `url(${project.image.url})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <span>
                <a href="#">Details</a>
              </span>
              <h3>{project.title}</h3>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                {project.techStack.join(', ')}
                </p>
                <p>
                 Live URL: {project.liveurl}
                </p>
                <p>
                  Github URL: {project.githuburl}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
