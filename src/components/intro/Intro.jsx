/* eslint-disable no-unused-vars */
import React from "react";
import "./intro.css";

import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="right-img">
        <div className="imagecontainer">
          <img src="assets/roman.png" alt="" />
        </div>
      </div>
      <div className="left-text">
        <h4>Hi There, This is </h4>
        <h3>Roman Pudasini</h3>
        <h2>
          I am{" "}
          <span>
            {" "}
            <TypeAnimation
              sequence={[
                "DEVELOPER",
                3000,
                "DESIGNER",
                3000,
                "ENTREPRENEUR",
                3000,
              ]}
              speed={50}
              className="gradient-text"
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h2>

        <div>
          <img className="down" src="assets/back.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
