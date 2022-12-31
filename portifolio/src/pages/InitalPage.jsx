import React, { Component } from 'react';
import profile from './images/20220212223809_IMG_97882.png';

class InitialPage extends Component {
  render() {
    return (
    <div>
      <ol>
          <li><a  className="indice" href="#nome">Quem sou eu</a></li>
          <li><a  className="indice" href="#conhecimento">Meus conhecimentos</a></li>
          <li><a  className="indice" href="#estudo">Áreas em desenvolvimento</a></li>
      </ol>
      <br/>
      <div>
        <h1 className="titulo">Gabriel Rodrigues da Silva</h1>
      <div className="image-container">
        <img id="eu" src={profile} alt="Gabriel Rodrigues" width="400px" />

        <p id="nome">
          Olá, meu nome é Gabriel, sou <span className="dadoslocais">brasileiro</span> e moro em <span className="dadoslocais">Mauá/SP</span>.
        </p>
      </div> 
      </div>

      <h4 className="tamanhoc" id="conhecimento"><em>Tenho conhecimento em:</em></h4>
      <ul>
          <li className="tamanhoc2">CSS</li>
          <li className="tamanhoc2">Moodle</li>
      </ul>
      <h4 id="estudo"><strong>Atualmente estudo na @betrybe os conteúdos de:</strong></h4>
      <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Python</li>
      </ul>
      <a href="#eu">Volte para minha foto</a><br/>
      <a 
        href="https://itforum.com.br/noticias/10-soft-skills-que-profissionais-de-ti-precisam-para-o-futuro-do-trabalho"
        target="_blank"
        rel="noopener noreferrer"
        >
          Soft Skills em desenvolvimento
      </a>
    </div>
  )
  }
}

export default InitialPage;
