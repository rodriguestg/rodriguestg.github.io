import React, { Component } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <header className="indice">
      <Link to="/">
        <p id="home" className="topbar" href="#nome">Home</p>
      </Link>
      <Link to="/about">
        <p id="aboutTop" className="topbar" href="#estudo">Minha história</p>
      </Link>
      <Link to="/skills">
        <p id="skills" className="topbar" href="#estudo">Skills</p>
      </Link>
      <Link to="/portfolio">
        <p id="portfolio" className="topbar" href="#estudo">Portifólio</p>
      </Link>
      <Link to="/contact">
        <p id="contact" className="topbar" href="#estudo">Estava me procurando?</p>
      </Link>
      <br/>
    </header>
  )
  }
}

export default Header;
