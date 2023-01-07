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
          <CardsProject data={ projectsPI } />
        </div>
      </section>
      <section className="box-father fadein">
        <div className="box-child">
          <div className="box-from-left box-from-left-initial">
            <h4 className="title-gradient-black" id="conhecimento"><strong>Tenho conhecimento em:</strong></h4>      
              <CardsSkills data={ techs } />
          </div>
          <div className="box-end-right box-end-right-initial">
            <h4 className="title-gradient-black" id="estudo">Atualmente estudo na @betrybe os conteúdos de:</h4>
              <CardsSkills data={ skills } />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
  }
}

export default InitialPage;
