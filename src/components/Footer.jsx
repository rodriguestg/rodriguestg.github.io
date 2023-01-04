import React, { Component } from 'react';
import './css/Footer.css'

class Footer extends Component {
  render() {
    return (
    <footer className="box">
      <a className="tamanhoc2" href="#eu">Volte para minha foto</a><br/>
      <a 
        href="https://itforum.com.br/noticias/10-soft-skills-que-profissionais-de-ti-precisam-para-o-futuro-do-trabalho"
        target="_blank"
        rel="noopener noreferrer"
        className="tamanhoc2" 
        >
          Soft Skills em desenvolvimento
      </a>
      <br/>
    </footer>
  )
  }
}

export default Footer;
