import React, { Component } from 'react';
import profile from '../pages/images/20220212223809_IMG_97882.png';

class About extends Component {
  render() {
    return (
    <section>
        <h1 className="titulo">Gabriel Rodrigues da Silva</h1>
      <div className="image-container">
        <img id="eu" src={profile} alt="Gabriel Rodrigues" width="400px" />

        <p id="nome">
          Olá, meu nome é Gabriel, sou <span className="dadoslocais">brasileiro</span> e moro em <span className="dadoslocais">Mauá/SP</span>.
        </p>
      </div> 
    </section>
  )
  }
}

export default About;
