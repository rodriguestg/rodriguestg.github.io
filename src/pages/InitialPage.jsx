import React, { Component } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { projectsPI } from './data';

class InitialPage extends Component {
  render() {
    return (
    <>
      <Header />
      <About />
      <Projects projects={ projectsPI } />
      <Skills />
      <Footer />
    </>
  )
  }
}

export default InitialPage;
