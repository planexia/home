import React from "react";
import "./Header.css"; // Importa estilos específicos para este componente

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <a href="#hero">
            <img src="assets/img/logo-planexia.png" alt="" className="img-fluid" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Servicios
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Socios
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
