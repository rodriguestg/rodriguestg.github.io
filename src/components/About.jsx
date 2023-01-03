import React, { Component } from 'react';
import './css/About.css'
import profile from '../pages/images/20220212223809_IMG_97882.png';

class About extends Component {
  render() {
    return (
    <section className="box">
      <div id="aboutHeader">
        <h1 id="titleName">Gabriel Rodrigues</h1>
        <p id="description">
          Olá, seja bem-vindo(a)! Como vai? Prazer, sou um 
          <span className="dadoslocais">Desenvolvedor Web Front-End</span> e moro em Mauá/SP,
          <span className="dadoslocais"> vamos se conectar? </span>
          <a
          href="https://www.linkedin.com/in/gabriel-rodrigues-t"
          target="_blank"
          rel="noopener noreferrer">
            <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" alt="linkedin" id="icon" />
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
