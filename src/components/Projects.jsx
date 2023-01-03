import React, { Component } from 'react';
import './css/Projects.css'

class Projects extends Component {
  render() {
    const techs = ['JavaScript', 'TypeScript', 'React', 'Node.Js', 'MySQL', 'Jest', 'RTL', 'Redux', 'API Context', 'HTML5', 'CSS', 'GIT', 'Metodologias Ágeis', 'Moodle'];
    return (
      <section className="boxSkills">
        <div className="boxTech">
          <h4 className="tamanhoc" id="conhecimento"><strong>Conheça meus projetos:</strong></h4>        
          {
            techs.map((tech) => 
              <span className="tamanhoc2">{ tech }</span>
            )
          }
        </div>
      </section>
  )
  }
}

export default Projects;
