import React, { Component } from "react";
import Logo from "../../../images/logo.svg";
import UserImage from "../../../images/DPP.png";

export class Navbar extends Component {


  constructor(props) {
    super(props);

    let loggedIn = false

    this.state = {
      loggedIn
    }


  }

  onLogout(e) {
    localStorage.removeItem("token");
    this.setState({ loggedIn: false });
  }

  render() {

    const { loggedIn } = this.state;
    return (

      <header className="mainNavigation container-fluid">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm box-shadow navbar-dark">
          <div className="container-fluid p-0 m-0">
            <a className="navbar-brand logo" asp-area=""  href="\#" >
              <div className="logo">
                <img src={Logo} asp-append-version="true" alt="logo" />
              </div>
            </a>

            <button className="menu-icon navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse text-center d-sm-inline-flex flex flex-sm-row-reverse">

              {loggedIn && (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a  href="\#" className="nav-link text-dark">Login</a>
                  </li>
                  <li className="nav-item">
                    <a href="\#"  className="nav-link text-dark">Register</a>
                  </li>
                </ul>
              )}
              {!loggedIn && (
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link text-dark" href="\#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {"Hesham Saleh"} <img className="prfile-picture" src={UserImage} alt="userimage"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right  text-center " aria-labelledby="navbarDropdownMenuLink">
                      <a  href="\#" className="dropdown-item">Settings</a>

                      <div className="dropdown-divider"></div>
                      <a  href="\#" className="dropdown-item">
                        <button type="button" onClick={this.onLogout} style={{ width: "auto" }} className="nav-link btn-link nav-logout-btn">Logout</button>
                      </a>
                    </div>
                  </li>
                </ul>
              )}
            </div>

          </div >
        </nav >
      </header >

    );
  }
}
