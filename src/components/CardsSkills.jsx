import React, { Component } from 'react';
import './css/Projects.css'

class CardsProject extends Component {
  render() {
    const { data } = this.props;
    return (
        <div className="box-child bounce box-child-initial">
          {
            data.map((elem) =>
              <span className="tags-low btn-black box-end-right-initial" key={ elem }>{ elem }</span>
            )
          }
        </div>
  )
  }
}

export default CardsProject;
