import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/Lesmains_logo_transparent.gif";
import title from "../img/レマンズ.gif";


const Navbar = () => (
  <nav className="navbar is-fixed-top is-flex is-transparent nav-height">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img className="navbar-logo" src={logo} alt="logo" width="48" />
        <img className="navbar-title" src={title} alt="レマンズ" width="150" />
      </Link>
    </div>
    <div className="navbar-start" />

    <div className="navbar-end is-flex contents-height">
      <Link className="navbar-item" to="/about">
        <span className="navbar-title">MENU</span>
      </Link>
      <Link className="navbar-item" to="/products">
        <span className="navbar-title">ACCESS</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
