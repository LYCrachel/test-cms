import React from "react";
import Link from "gatsby-link";
import { TweenMax } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import github from "../img/github-icon.svg";
import logo from "../img/Lesmains_logo_transparent.gif";
import title from "../img/レマンズ.gif";

const scrollTo = (target) => {
  TweenMax.to(window, 0.5, {
    ease: Expo.easeOut,
    scrollTo: target
  })
}


const Navbar = () => (
  <nav className="navbar is-fixed-top is-flex is-transparent nav-height" id="nav">
    <div className="navbar-brand">
      <a className="navbar-item" onClick={() => scrollTo("#top")}>
        <img className="navbar-logo" src={logo} alt="logo" width="48" />
        <img className="navbar-title" src={title} alt="レマンズ" width="150" />
      </a>
      <div className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className="navbar-start" />

    <div className="navbar-end is-flex contents-height">
      <a className="navbar-item" onClick={() => scrollTo("#information")}>
        <span className="navbar-title">INFORMATION</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#salon")}>
        <span className="navbar-title">SALON CONCEPT</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#introduction")}>
        <span className="navbar-title">INTRODUCTION</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#school_c")}>
        <span className="navbar-title">SCHOOL CONCEPT</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#school")}>
        <span className="navbar-title">SCHOOL</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#menu")}>
        <span className="navbar-title">MENU</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#contact")}>
        <span className="navbar-title">CONTACT</span>
      </a>
      <a className="navbar-item" onClick={() => scrollTo("#access")}>
        <span className="navbar-title">ACCESS</span>
      </a>

    </div>
  </nav>
);

export default Navbar;
