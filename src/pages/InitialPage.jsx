import React, { Component } from 'react';
import About from '../components/About';
import CardsProject from '../components/CardsProject';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardsSkills from '../components/CardsSkills';
import { projectsPI, techs, skills } from '../db';
import '../components/css/Skills.css'

class InitialPage extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <section className="box-father fadein">
          <div className="box-child">
            <h4 className="title-gradient-black" id="conhecimento"><strong>Conheça meus projetos:</strong></h4>
            <CardsProject data={projectsPI} />
          </div>
        </section>
        <section className="box-father fadein">
          <div className="box-child">
            <div className="box-from-left box-from-left-initial">
              <h4 className="title-gradient-black" id="conhecimento"><strong>Tenho conhecimento em:</strong></h4>
              <CardsSkills data={techs} />
            </div>
            <div className="box-end-right box-end-right-initial">
              <h4 className="title-gradient-black" id="estudo">Saiba mais sobre mim</h4>
              <p className="description-about">Trabalho com tecnologia há 8 anos, inicei como WebDesiner e desde 2022 estou focado em Desenvolvimento de sistemas e aplicações Web, sendo certificado como Desenvolvedor Web Full-Stack pela @betrybe, atualmente estou trabalhando em um sistema de gestão escolar para escolas do ensino fundamental/médio, utilizando a linguagem PHP/Laravel, porém tenho mais de 35 projetos em meu perfil do GitHub, utilizando JavaScript, Python e TypeScript.</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default InitialPage;
