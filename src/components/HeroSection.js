import React from "react";
import "./HeroSection.css"; // Importa estilos específicos para este componente

const HeroSection = () => {
  return (
    <section id="hero" className="clearfix">
      <div className="container" data-aos="fade-up">
        <div className="hero-img" data-aos="zoom-out" data-aos-delay="200">
          <img src="../assets/img/hero-img.svg" alt="" className="img-fluid" />
        </div>

        <div className="hero-info" data-aos="zoom-in" data-aos-delay="100">
          <h2>
            <br />
            <span>Soluciones ERP y CRM</span>
            <br />
            para su empresa!
          </h2>
          <div>
            <a href="#about" className="btn-get-started scrollto">
              Comencemos
            </a>
            <a href="#services" className="btn-services scrollto">
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
