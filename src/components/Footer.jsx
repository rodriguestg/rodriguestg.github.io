import React, { Component } from 'react';
import './css/Footer.css'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    // const { location } = this.props;
    return (
      <footer>
        <div className="box-footer">
          <div className="box-from-left box-from-left-footer">
            <Link to="/">
              <p id="home" className="footer-text" href="#nome">Home</p>
            </Link>
            <Link to="/about">
              <p id="aboutTop" className="footer-text" href="#estudo">| Minha história </p>
            </Link>
            <Link to="/skills">
              <p id="skills" className="footer-text" href="#estudo">| Skills </p>
            </Link>
            <Link to="/portfolio">
              <p id="portfolio" className="footer-text" href="#estudo">| Portifólio </p>
            </Link>
            <Link to="/contact">
              <p id="contact" className="footer-text" href="#estudo">| Estava me procurando?</p>
            </Link>
          </div>
          <div className="box-end-right box-end-right-footer">
            <a href="https://www.linkedin.com/in/gabriel-rodrigues-t" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="linkedin" />
            </a>
            <a href="mailto:trab.rodrigues@gmail.com" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="email" />
            </a>
            <a href="https://www.hackerrank.com/trab_rodrigues">
              <img src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" target="_blank" alt="Hackerrank" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511920006007" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="whatsapp" />
            </a>
            <a href="https://www.behance.net/gabrielrodris/" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/Behance-0054F7?style=for-the-badge&logo=behance&logoColor=white" alt="behance" />
            </a>
            <a href="https://github.com/rodriguestg/" target="_blank" rel="noreferrer">
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="github" />
            </a>
          </div>
        </div>
        <div className="footer-footer">
          <p className="footer-p">® Desenvolvido por Gabriel Rodrigues com muito carinho e algumas horas de sono.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
