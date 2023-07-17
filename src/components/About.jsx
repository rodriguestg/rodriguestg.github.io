import React, { Component } from 'react';
import './css/About.css'
import profile from '../pages/images/20220212223809_IMG_97882.png';

class About extends Component {
  render() {
    return (
      <section className="box-about">
        <div id="about-header">
          <h1 id="title-name">Gabriel Rodrigues</h1>
          <p id="description">
            Olá, seja bem-vindo(a)! Como vai? Prazer, sou um
            <span className="bold"> Desenvolvedor Web Full-Stack</span> e moro em Mauá/SP,
            <span className="bold"> vamos se conectar? </span>
            <a
              href="https://www.linkedin.com/in/gabriel-rodrigues-t"
              target="_blank"
              rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedin" id="icon" />
            </a>.
          </p>
        </div>
        <div className="image-container">
          <img id="profile" src={profile} alt="Gabriel Rodrigues" />
        </div>
      </section>
    )
  }
}

export default About;
