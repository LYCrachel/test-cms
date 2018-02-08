import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="navContent">
      <Link to="/" className="navbar-item">
        <span className="navbar-title">
          HOME
        </span>
      </Link>
      <Link className="navbar-item" to="/about">
        <span className="navbar-title">
          plan
        </span>
      </Link>
      <Link className="navbar-item" to="/products">
        <span className="navbar-title">
          access
        </span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
