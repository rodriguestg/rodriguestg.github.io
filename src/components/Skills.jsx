import React, { Component } from 'react';
import './css/Skills.css'

class Skills extends Component {
  render() {
    const techs = ['JavaScript', 'TypeScript', 'React', 'Node.Js', 'MySQL', 'Jest', 'RTL', 'Redux', 'API Context', 'HTML5', 'CSS', 'GIT', 'Metodologias Ágeis', 'Moodle'];
    const skills = ['TDD', 'ORM', 'JWT', 'MongoDB', 'Python'];
    return (
      <section className="boxSkills">
        <div className="boxTech">
          <h4 className="tamanhoc" id="conhecimento"><strong>Tenho conhecimento em:</strong></h4>        
          {
            techs.map((tech) => 
              <span className="tamanhoc2">{ tech }</span>
            )
          }
        </div>
        <div className="boxTech">
          <h4 className="tamanhoc" id="estudo"><strong>Atualmente estudo na @betrybe os conteúdos de:</strong></h4>
          <div className="boxTech">
            {
              skills.map((skill) => 
                <span className="tamanhoc2">{ skill }</span>
              )
            }
          </div>
        </div>
      </section>
  )
  }
}

export default Skills;
