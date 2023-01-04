import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';

class Portfolio extends Component {
  render() {
    return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  )
  }
}

export default Portfolio;
