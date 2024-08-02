import React from "react";
import aboutImg from "../assets/img/about-img.svg"; // Importación de la imagen
import "./AboutSection.css"; // Importación de los estilos CSS

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h3>Sobre Nosotros</h3>
          <p>Conoce más sobre nuestra empresa y nuestros valores.</p>
        </div>
        <div className="about-container">
          <div className="content">
            <p>
              Somos una empresa comprometida con la excelencia y la innovación.
              Ofrecemos servicios de calidad para satisfacer las necesidades de
              nuestros clientes.
            </p>
            <ul>
              <li>Innovación constante</li>
              <li>Compromiso con la calidad</li>
              <li>Atención personalizada</li>
            </ul>
          </div>
          <div className="background">
            <img
              src={aboutImg} // Uso de la imagen importada
              className="img-fluid"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
