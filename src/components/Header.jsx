import React, { Component } from 'react';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
    <header className="indice">
      <a id="home" className="topbar" href="#nome">Home</a>
      <a id="aboutTop" className="topbar" href="#estudo">Minha história</a>
      <a id="skills" className="topbar" href="#estudo">Skills</a>
      <a id="portfolio" className="topbar" href="#estudo">Portifólio</a>
      <a id="contact" className="topbar" href="#estudo">Estava me procurando?</a>
      <br/>
    </header>
  )
  }
}

export default Header;
