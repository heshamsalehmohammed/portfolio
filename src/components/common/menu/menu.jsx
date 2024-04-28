import React, { Component } from 'react';
import {SocialLinks} from '../socialLinks/index';



export  class Menu extends Component {
  render() {
    return (
      <div className={`menu-container ${this.props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={this.props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={this.props.toggleMenu}>
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" onClick={this.props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  }

};