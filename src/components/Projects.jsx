import React, { Component } from 'react';
import './css/Projects.css'
import CardsProject from './CardsProject';

class Projects extends Component {
  render() {
    const { projects } = this.props;
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
