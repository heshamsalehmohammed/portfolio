import React, { Component } from "react";
import { Routes , Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/home/index";
import { Landing } from "./components/landing/index";
import { Splashscreen } from './components/splashscreen/index';
import "./App.scss";





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
        </Routes >
      </BrowserRouter>
    );
  }
}

export default Splashscreen(App);
