import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header>
      <ol>
          <li><a  className="indice" href="#nome">Home</a></li>
          <li><a  className="indice" href="#estudo">Minha história</a></li>
          <li><a  className="indice" href="#estudo">Skills</a></li>
          <li><a  className="indice" href="#estudo">Portifólio</a></li>
          <li><a  className="indice" href="#estudo">Estava me procurando?</a></li>
      </ol>
      <br/>
    </header>
  )
  }
}

export default Header;
