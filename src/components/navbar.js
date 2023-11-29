import React from "react";
import { Element, Link } from "react-scroll";
import "./navbar.css";

const NavBar = () => {
  return (
    <aside className="sidebar">
    <h1>Example.com</h1>
    <ul className="nav">
      <li>Home</li>
      <li>About</li>
      <li>
        <a href="#getting-started">Getting started</a>
      </li>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#my-account">My account</a>
      </li>
      <li>Company</li>
      <li>Jobs</li>
      <li>Sign up</li>
      <li>Privacy policy</li>
    </ul>
  </aside>
  );
};

export default NavBar;
