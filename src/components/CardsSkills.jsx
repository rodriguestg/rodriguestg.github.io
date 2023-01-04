import React, { Component } from 'react';
import './css/Projects.css'

class CardsProject extends Component {
  render() {
    const { data } = this.props;
    return (
        <div className="boxTech">
          {
            data.map((elem, index) =>
              <span className="tamanhoc2" key={ elem }>{ elem }</span>
            )
          }
        </div>
  )
  }
}

export default CardsProject;
