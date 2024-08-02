import React from "react";
import "./ServiceSection.css"; // Importa estilos específicos para este componente
import { FaBinoculars } from 'react-icons/fa'; 
const ServicesSection = () => {
  return (
    <section id="services" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Servicios</h3>
          <p>
            Software de gestión empresarial y comercial, Implementación y
            Soporte técnico
          </p>
        </header>

        <div className="row justify-content-center">
          <div
            className="col-md-6 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box">
              <div className="icon">
                <i className="bi bi-briefcase" style={{ color: "#ff689b" }}></i>
              </div>
              <h4 className="title">
                <a href="#">Consultoria</a>
              </h4>
              <p className="description">
                Estudiamos la situación de su empresa y le ofrecemos las mejores
                soluciones.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="box">
              <div className="icon">
                <i className="bi bi-bar-chart" style={{ color: "#e9bf06" }}></i>
              </div>
              <h4 className="title">
                <a href="#">ERP</a>
              </h4>
              <p className="description">
                Implementamos sistemas ERP que facilitan la gestión empresarial.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="box">
              <div className="icon">
                <i className="bi bi-card-checklist" style={{ color: "#3fcdc7" }}></i>
              </div>
              <h4 className="title">
                <a href="#">CRM</a>
              </h4>
              <p className="description">
                Potenciamos tus relaciones con clientes mediante un CRM avanzado.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-5"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
                <div className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="400">
      <div className="box">
        <div className="icon">
          <FaBinoculars />
        </div>
        <h4 className="title">
          <a href="#">Indicadores</a>
        </h4>
        <p className="description">
          Desarrollamos herramientas analíticas para optimizar decisiones financieras.
        </p>
      </div>
    </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
