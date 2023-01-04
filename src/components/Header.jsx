import React, { Component } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <header className="indice">
      <a id="home" className="topbar" href="#nome">Home</a>
      <Link to="/about">
        <a id="aboutTop" className="topbar" href="#estudo">Minha história</a>
      </Link>
      <a id="skills" className="topbar" href="#estudo">Skills</a>
      <a id="portfolio" className="topbar" href="#estudo">Portifólio</a>
      <a id="contact" className="topbar" href="#estudo">Estava me procurando?</a>
      <br/>
    </header>
  )
  }
}

export default Header;
