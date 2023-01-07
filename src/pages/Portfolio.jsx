import React, { Component } from 'react';
import CardsProject from '../components/CardsProject';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { projectsList } from '../db';

class Portfolio extends Component {
  render() {
    return (
    <>
      <Header />
      <section className="box-father">
        <div className="box-child">
          <h4 className="title-gradient-black" id="conhecimento"><strong>Conheça meus projetos:</strong></h4>        
          <CardsProject data={ projectsList } />
        </div>
      </section>
      <Footer />
    </>
  )
  }
}

export default Portfolio;
