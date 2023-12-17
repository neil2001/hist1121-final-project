import React from "react";
import { Element, Link } from "react-scroll";
import "./navbar.css";
import logo from '../images/yuanmingyuan_logo.png';

const NavBar = () => {
  return (
    <div className="sidebar">
      <a href="/">
      <img className="logo" src={logo} alt="Remembering the Yuan Ming Yuan"></img>
      </a>
    <ul className="nav">
      <li><a href="#introduction">Introduction</a></li>
      <li>
        <a href="#history-and-construction">History and Construction</a>
      </li>
      <li>
        <a href="#second-opium-war">The Second Opium War</a>
      </li>
      <li>
        <a href="#artifacts">Artifacts</a>
      </li>
      <li> <a href="#modern-perspective">Modern Perspective</a></li>
      <li><a href="#bibliography">Bibliography</a></li>
    </ul>
  </div>
  );
};

export default NavBar;
