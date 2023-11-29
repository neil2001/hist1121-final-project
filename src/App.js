import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Section from "./components/section";
import Title from "./components/title";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Section />
    </div>
  );
}

export default App;
