import React from 'react'
import './App.css';
import InitialPage from './pages/InitialPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { projectsList } from './db';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <InitialPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/skills" element={ <SkillsPage /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/contact" element={ <Contact /> } />
        {
        projectsList.map((project) =>
          <Route path={ project.link } element={ project.elem } />
        )
        }
      </Routes>
     </BrowserRouter>
  );
  }
}

export default App;
