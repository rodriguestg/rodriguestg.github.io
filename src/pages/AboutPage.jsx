import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardsSkills from '../components/CardsSkills';
import { techs, skills } from '../db';
import '../components/css/Skills.css'
import '../components/css/Projects.css'
import profile from '../pages/images/20220212223809_IMG_97882.png';

class AboutPage extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="box-father bounce">
          <div id="about-header-2">
            <img id="profile" src={profile} alt="Gabriel Rodrigues" />
            <h1 id="title-name">Gabriel Rodrigues</h1>
            <p id="description">
              <span className="bold">Vamos se conectar? </span>
              <a
                href="https://www.linkedin.com/in/gabriel-rodrigues-t"
                target="_blank"
                rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedin" id="icon" />
              </a>.
            </p>
            <div className="box-from-left">
              <article className="text-project box-from-left-about">
                Olá, seja bem-vindo(a)!

                Sou o Gabriel Rodrigues, natural de Mauá (SP), eu amo praticar esportes, como futebol e natação, gosto de ter sempre um bom livro me acompanhando, de planejar boas viagens e participar de eventos radicais, além de amar design e códigos!

                Sou certificado como Desenvolvedor Web Full-Stack pela Trybe, tendo o conhecimento das tecnologias de front-end e back-end em Javascript, PHP, Laravel, React, RTL, Jest, Redux, API Context, CSS, HTML, Python, Algoritmos, POO, GIT, Docker, MySQL, Arquitetura de Software, Node.js, ORM, JWT, Typescript, MongoDB e Metodologias Ágeis.

                Em meu trabalho atual tenho gerenciado um sistema em PHP e Laravel, complementando minhas tecnologias utilizando Ajax e jQuery.

                Iniciei em 2014 como designer e administrador Moodle (plataforma EAD), através de agencias e plataformas de hospedagem e suporte EAD.
                <br />
                <a className="tags-low btn-black box-end-right-initial" href="https://github.com/rodriguestg/">GitHub</a>
                <a className="tags-low btn-black box-end-right-initial" href="https://www.behance.net/gabrielrodris/">Behance</a>
              </article>
            </div>
          </div>
        </section>
        <section className="box-father fadein">
          <div className="box-child">
            <div className="box-from-left box-from-left-initial">
              <h4 className="title-gradient-black" id="conhecimento"><strong>Tenho conhecimento em:</strong></h4>
              <CardsSkills data={techs} />
            </div>
            <div className="box-end-right box-end-right-initial">
              <h4 className="title-gradient-black" id="estudo">Atualmente estudo na @betrybe os conteúdos de:</h4>
              <CardsSkills data={skills} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default AboutPage;
