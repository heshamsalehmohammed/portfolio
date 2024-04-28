import React, { Component } from "react";
import HeshamLogo from "../../../images/SVG/HeshamLogo.jsx";

export class Header extends Component {
  render() {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="moon">{<HeshamLogo />}</div>
        <div className="container">
          <h1>
            <span className="line">Full</span>
            <span className="line">Stack</span>
            <span className="line">
              <span className="color glow">web</span> Developer.
            </span>
          </h1>
          <div className="buttons">
            <a href="#about">About Me</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  }
}
