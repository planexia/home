import React from "react";
import "./ContactSection.css"; // Importa estilos específicos para este componente

const ContactSection = () => {
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Contacto</h3>
          <p>Dejanos tu mensaje y nos pondremos en contacto contigo</p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"></i>
              <h3>Dirección</h3>
              <address>Av. Siempre Viva 742, Springfield, USA</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"></i>
              <h3>Teléfono</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>
        </div>

        <div className="form">
          <form action="" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Por favor ingresa al menos 4 caracteres" />
                <div className="validate"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Por favor ingresa un email válido" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Por favor ingresa al menos 8 caracteres de asunto" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Por favor escribe un mensaje" placeholder="Mensaje"></textarea>
              <div className="validate"></div>
            </div>
            <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
