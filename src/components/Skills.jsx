import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section>
        <h4 className="tamanhoc" id="conhecimento"><em>Tenho conhecimento em:</em></h4>
        <ul>
            <li className="tamanhoc2">CSS</li>
            <li className="tamanhoc2">Moodle</li>
        </ul>
        <h4 id="estudo"><strong>Atualmente estudo na @betrybe os conteúdos de:</strong></h4>
        <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>Python</li>
        </ul>
      </section>
  )
  }
}

export default Skills;
