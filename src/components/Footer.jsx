import React, { Component } from 'react';
import './css/Footer.css'
// import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    // const { location } = this.props;
    return (
    <footer className="box">
      <a href="https://www.linkedin.com/in/gabriel-rodrigues-t" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" alt="linkedin" />
      </a> 
      <a href="mailto:trab.rodrigues@gmail.com" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="email" />
      </a>
      <a href = "https://www.hackerrank.com/trab_rodrigues">
        <img src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" target="_blank" alt="Hackerrank" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5511920006007" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="whatsapp" />
      </a>
      <a href="https://www.behance.net/gabrielrodris/" target="_blank" rel="noreferrer">
        <img src="https://img.shields.io/badge/Behance-0054F7?style=for-the-badge&logo=behance&logoColor=white" alt="behance" />
      </a>
      {
        // location.pathname === '/' ?
        // null : <Link className="tamanhoc2" id="back" to={{ pathname: "/", hash: "#profile" }}>
        //   <a href="/#profile">Inicio</a><br/>
        // </Link>
      }
      <br/>
    </footer>
  )
  }
}

export default Footer;
