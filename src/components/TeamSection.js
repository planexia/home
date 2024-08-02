import React from "react";
import "./TeamSection.css"; // Importa estilos específicos para este componente

const TeamSection = () => {
  return (
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Socios</h3>
          <p>Conoce a nuestros aliados estratégicos</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member">
              <img src="assets/img/planexia-partner-1.svg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Socio 1</h4>
                  <span>Descripción breve</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="member">
              <img src="assets/img/planexia-partner-2.svg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Socio 2</h4>
                  <span>Descripción breve</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="member">
              <img src="assets/img/planexia-partner-3.svg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Socio 3</h4>
                  <span>Descripción breve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
