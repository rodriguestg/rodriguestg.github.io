import React, { Component } from 'react';
import './css/Projects.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import { projectsList } from '../db';

class Projects extends Component {
  render() {
    const { project } = this.props;
    const render = projectsList.find((pro) => pro.name === project)
    return (
      <>
      <Header />
      <About />
        <section className="box-father bounce">
          <div className="box-title">
            <h4 className="title-gradient-black title-project min-bottom"><strong>{ render.name }</strong></h4>        
            <span className="card-describe describe-project">{ render.describe }</span>
          </div>
          <div className="box-child" >
            {
            render.demo.img ? <div className="box-from-left">
              <iframe src={ render.demo.img } title={ render.name } className="img-project" allowfullscreen/>
            </div> : null
            }
            <div className="box-end-right">
              <article className="text-project">{ render.text }</article>
              <div className="box-btn">
                <a href={ render.href }><span className="btn-black btn-project btn-project">Repositório</span></a>
                { render.demo.video ? <a href={ render.web }><span className="btn-black btn-project btn-project">Ver vídeo</span></a> : null }
                { render.web ? <a href={ render.web }><span className="btn-black btn-project btn-project">Ver online</span></a> : null }
                <Link to="/">
                  <span className="btn-black btn-project back">Voltar</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      <Footer />
    </>
  )
  }
}

export default Projects;
