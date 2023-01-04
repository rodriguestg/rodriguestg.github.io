import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import { projectsList } from './database';

class Portfolio extends Component {
  render() {
    return (
    <>
      <Header />
      <Projects projects={ projectsList }/>
      <Footer />
    </>
  )
  }
}

export default Portfolio;
