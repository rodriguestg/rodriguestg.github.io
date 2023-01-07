import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardsSkills from '../components/CardsSkills';
import { techs, skills } from '../db';
import '../components/css/Skills.css'

class SkillsPage extends Component {
  render() {
    return (
    <>
      <Header />
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

export default SkillsPage;
