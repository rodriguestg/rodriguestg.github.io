import React, { Component } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Skills from '../components/Skills';

class InitialPage extends Component {
  render() {
    return (
    <>
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  )
  }
}

export default InitialPage;
