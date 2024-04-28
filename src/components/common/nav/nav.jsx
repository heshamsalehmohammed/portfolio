import React, { Component } from 'react';


export  class Nav extends Component {

  render() {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
            <strong>Hesham Saleh</strong>
            </p>
            <a
              onClick={this.props.toggleMenu}
              className={this.props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
              href="\#"
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }

} 