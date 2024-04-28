import React, { Component } from 'react';
import { Login } from "../../landing2/login";
import { Register } from "../../landing2/register";

export class About extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token")

    let loggedIn = false
    if (token != null) {
      loggedIn = true
    }
    this.state = {
      loggedIn,
      isLogginActive: true
    }
    this.changeState = this.changeState.bind(this)
  }
  
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
 
    return (
      <section id="about" className="text-center">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Let's Expand our community</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <div className={"login "}>
                <div className="parent-container" ref={ref => (this.container = ref)}>
                  {isLogginActive && (
                    <Login containerRef={ref => (this.current = ref)} />
                  )}
                  {!isLogginActive && (
                    <Register containerRef={ref => (this.current = ref)} />
                  )}
                </div>
                <RightSide
                  current={current}
                  currentActive={currentActive}
                  containerRef={ref => (this.rightSide = ref)}
                  onClick={this.changeState}
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}


const RightSide = props => {
  return (
    <div className="right-side container right" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container pt-3 pb-3">
        <div className="text" style={{cursor:"pointer"}}>{props.current}</div>
      </div>
    </div>
  );
};

