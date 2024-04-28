import React, { Component } from "react";
import { SocialLinks } from "../socialLinks/index";
import Logo from "../../../images/logo.svg";

export class Footer extends Component {
  render() {
    return (
      <footer >
        <div className=" wrapper">
          <div>
            <p>
              <img src={Logo} alt="logo" /> © {new Date().getFullYear()}{" "}
              HeshamSaleh.
            </p>
          </div>
          <SocialLinks />
        </div>
      </footer>
    );
  }
}
