import React from "react";
import "./styles.scss";
import logo from "../../../assets/images/university/logo.jpg";

export const Aside = () => {
  return (
    <div className="Aside">
      <div className="topwrapper">
        <img src={logo} alt="raposa" className="Aside__logo" />
        <p className="topwrapper__title">
          CEFET-RJ
          <br />
          FRIBURGO
        </p>
        <p className="topwrapper__subtitle"></p>
      </div>
      <div className="bottomwrapper">
        <p className="bottomwrapper__title">ABOUT</p>
        <p className="bottomwrapper__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisi vel consectetur euismod, nisi nisl tincidunt
            nisi, eget consectetur nisl nisi velit eget nisl.
        </p>
        <p className="bottomwrapper__learnmore">
            <a href="/">LEARN MORE</a>
        </p>
      </div>
      <div className="Aside__social">

      </div>
    </div>
  );
};
