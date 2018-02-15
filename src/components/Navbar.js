import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/Lesmains_logo_transparent.gif';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="navContent">
      <Link to="/" className="navbar-logo">
        <figure className="image-logo">
          <img src={logo} alt="logo" style={{ width: '62px' }} />
        </figure>
        <span>レ・マンズ・M</span>
      </Link>
      <div className="navbar-right">
        <Link className="navbar-item" to="/about">
          <span className="navbar-title">
            MENU
          </span>
        </Link>
        <Link className="navbar-item" to="/products">
          <span className="navbar-title">
            ACCESS
          </span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
