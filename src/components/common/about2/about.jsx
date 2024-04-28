import React, { Component } from "react";
import $ from "jquery";
window.jQuery = $;
require("jquery-tagcanvas");

export class About extends Component {
  componentDidMount() {
    if (
      !$("#myCanvas").tagcanvas({
        textColour: "#fafafa",
        outlineThickness: 0.5,
        outlineColour: "#FE0853",
        maxSpeed: 0.03,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 1,
        noSelect: true,
        textFont: null,
        pinchZoom: true,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
      })
    ) {
      // TagCanvas failed to load
      $("#myCanvasContainer").hide();
    }
  }

  render() {
    return (
      <section id="about" className="text-center">
        <div className="wrapper container">
          <div className="row mt-3 mb-3 p-1 pt-5 pb-5">
            <div className="col-md-6 col-sm-12">
              <h2 align="LEFT" className="glow pt-5">
                <span className="line">
                  <span className="color">About me </span>
                </span>
              </h2>
              <p align="LEFT">
                Professionally connected with the web development industry and
                information technology for many years.
              </p>
              <p align="LEFT">
                Well-organised person, problem solver, independent employee with
                high attention to detail. Fan of music, outdoor activities ,
                problem solving and, recently artificual intelegence. English
                fluent. A family person, therefore remote employment is
                preferred.
              </p>
              <p align="LEFT">
                Interested in the entire full stack spectrum and working on
                ambitious projects with positive people.
              </p>
              <h2 align="LEFT" className="glow pt-5">
                <span className="line">
                  <span className="color">Skills & Experience </span>
                </span>
              </h2>
              <p align="LEFT">
                The main area of my expertise is full stack web development
                (front end & back end)
              </p>
              <p align="LEFT">
                I have a solid experience with C# OOP , Design Patterns ,
                ASP.Net Core , MVC , RestfulAPIs , EntityFramework6 , Linq , PHP{" "}
              </p>
              <p align="LEFT">
                I also have a very wide Front end developing experience in
                animation and graphics programming using ( Three.js & WebGl ),
                HTML/HTML5, CSS/CSS3 , JavaScript / ECMAScript6 , JQuery , AJAX
                , AXIOS , Bootstrap , TypeScript,<br></br><br></br> Building small and
                medium web apps with ( Angular 2+ & React.js ) and contibuting
                in large scale projects, features, animations, and coding
                interactive layouts.
              </p>
              <p align="LEFT">
                had an experience for long time at creating desktop apps WFA
                (windows forms applications) & WPF (windows presentation forms){" "}
              </p>
              <p>
                Visit my{" "}
                <a href="https://www.linkedin.com/in/heshamsalehmohammed/">
                  LinkedIn{" "}
                </a>
                profile for more details or just{" "}
                <a href="#contact">contact </a>me.
              </p>
            </div>
            <canvas
              className="col-md-6 col-sm-12"
              width="500"
              height="500"
              id="myCanvas"
            >
              <ul>
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                    HTML/HTML5
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                    target="_blank"
                  >
                    CSS/CSS3
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                  >
                    TypeScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="24"
                    href="https://en.wikipedia.org/wiki/React_(web_framework)"
                    target="_blank"
                  >
                    React.Js
                  </a>
                </li>
                <li>
                  <a
                    data-weight="14"
                    href="https://en.wikipedia.org/wiki/JSON"
                    target="_blank"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a
                    data-weight="13"
                    href="https://en.wikipedia.org/wiki/XML"
                    target="_blank"
                  >
                    XML
                  </a>
                </li>
                <li>
                  <a
                    data-weight="27"
                    href="https://en.wikipedia.org/wiki/AngularJS"
                    target="_blank"
                  >
                    Angular 2+
                  </a>
                </li>
                <li>
                  <a
                    data-weight="26"
                    href="https://en.wikipedia.org/wiki/PHP"
                    target="_blank"
                  >
                    PHP
                  </a>
                </li>

                <li>
                  <a
                    data-weight="21"
                    href="https://en.wikipedia.org/wiki/Node.js"
                    target="_blank"
                  >
                    Node JS
                  </a>
                </li>
                <li>
                  <a
                    data-weight="17"
                    href="https://en.wikipedia.org/wiki/Git"
                    target="_blank"
                  >
                    Git
                  </a>
                </li>
                <li>
                  <a data-weight="17" href="" target="_blank">
                    _lodash
                  </a>
                </li>
                <li>
                  <a
                    data-weight="23"
                    href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                    target="_blank"
                  >
                    Bootstrap
                  </a>
                </li>
                <li>
                  <a
                    data-weight="15"
                    href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                    target="_blank"
                  >
                    SASS
                  </a>
                </li>
                <li>
                  <a
                    data-weight="20"
                    href="https://en.wikipedia.org/wiki/Responsive_web_design"
                    target="_blank"
                  >
                    RxJs
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://en.wikipedia.org/wiki/JQuery"
                    target="_blank"
                  >
                    jQuery
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://karma-runner.github.io/1.0/index.html"
                    target="_blank"
                  >
                    Karma
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://www.npmjs.com/"
                    target="_blank"
                  >
                    npm
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    ASP.Net Core
                  </a>
                </li>
                <li>
                  <a
                    data-weight="19"
                    href="https://jasmine.github.io/"
                    target="_blank"
                  >
                    Jasmine
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    MVC
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    Restful APIs
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    SQL
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    MySQL
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    SQL Server
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    PostgreSQL
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    Entity framework 6
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    JIRA
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    C#/OOP
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    XUnit
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    Oracle
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    Linq
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    AJAX
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    Jest
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    TweenMax
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    WebGL/ThreeJS
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    SiteCore
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    AgilePoint
                  </a>
                </li>

                <li>
                  <a data-weight="19" href="" target="_blank">
                    C# WFA/WPF
                  </a>
                </li>
                <li>
                  <a data-weight="19" href="" target="_blank">
                    C++
                  </a>
                </li>
              </ul>
            </canvas>
          </div>
        </div>
      </section>
    );
  }
}
