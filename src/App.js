import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import NavBar from "./assets/components/navbar";
import Section from "./assets/components/section";
import Title from "./assets/components/title";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Section />
    </div>
  );
}

export default App;
