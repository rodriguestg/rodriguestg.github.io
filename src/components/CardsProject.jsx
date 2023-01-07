import React, { Component } from 'react';
import './css/Projects.css'
import { Link } from 'react-router-dom';

class CardsProject extends Component {
  render() {
    const { data } = this.props;
    return (
        <div className="box-child">
          {
            data.map((project, index) =>
              <Link className="tags-default card-project btn-black" to={ project.link } key={ index }>
                <span className="card-name">{ project.name }</span>
                <br />
                <span className="card-describe">{ project.describe }</span>
              </Link>
            )
          }
        </div>
  )
  }
}

export default CardsProject;
