import React, { Component } from 'react';
import './css/Skills.css'

class Skills extends Component {
  render() {
    return (
      <section className="boxSkills">
        <div>
          <h4 className="tamanhoc" id="conhecimento"><em>Tenho conhecimento em:</em></h4>
          <ul>
              <li className="tamanhoc2">JavaScript</li>
              <li className="tamanhoc2">TypeScript</li>
              <li className="tamanhoc2">React</li>
              <li className="tamanhoc2">Node.Js</li>
              <li className="tamanhoc2">MySQL</li>
              <li className="tamanhoc2">Jest</li>
              <li className="tamanhoc2">RTL</li>
              <li className="tamanhoc2">Redux</li>
              <li className="tamanhoc2">API Context</li>
              <li className="tamanhoc2">HTML5</li>
              <li className="tamanhoc2">CSS</li>
              <li className="tamanhoc2">GIT</li>
              <li className="tamanhoc2">Metodologias Ágeis</li>
              <li className="tamanhoc2">Moodle</li>
          </ul>
        </div>
        <div>
          <h4 id="estudo"><strong>Atualmente estudo na @betrybe os conteúdos de:</strong></h4>
          <ul>
            <li>TDD</li>
              <li>ORM</li>
              <li>JWT</li>
              <li>MongoDB</li>
              <li>Python</li>
          </ul>
        </div>
      </section>
  )
  }
}

export default Skills;
