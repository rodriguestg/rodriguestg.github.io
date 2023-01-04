import React, { Component } from 'react';
import './css/Projects.css'
import CardsProject from './CardsProject';

class Projects extends Component {
  render() {
    const projects = [
      { name: 'MongoDB', describe: 'Querys para buscar dados em um banco de dados NoSQL - MongoDb', link: '/about' },
      { name: 'Ver +', describe: 'Conheça alguns dos principais projetos já concluídos', link: '/portfolio' }
    ];
    return (
      <section className="boxSkills">
        <div className="boxTech">
          <h4 className="tamanhoc" id="conhecimento"><strong>Conheça meus projetos:</strong></h4>        
          <CardsProject data={ projects } />
        </div>
      </section>
  )
  }
}

export default Projects;
