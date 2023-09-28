/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testinomial from "./components/testinomials/Testinomial";
import Contact from "./components/contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="section">
        <Intro />
        <Portfolio />
        <Work />
        <Testinomial />
        <Contact />
      </div>
    </div>
  );
};

export default App;
