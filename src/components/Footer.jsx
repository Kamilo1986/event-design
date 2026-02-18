import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Columna 1 - Marca */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Event Design</h5>
            <p className="small">
              Producción estratégica de eventos empresariales,
              catering corporativo y activaciones de marca.
              Más de 20 años creando experiencias memorables
              para compañías y organizaciones.
            </p>
          </div>

          {/* Columna 2 - Servicios */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Servicios</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Eventos empresariales
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Catering corporativo
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Activaciones de marca
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Solicitar propuesta
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-semibold">Contacto</h6>

            {/* Correo */}
            <p className="small mb-2">
              📧{" "}
              <a
                href="mailto:contacto@eventdesign.com.co?subject=Solicitud de evento empresarial"
                className="text-light text-decoration-none"
                aria-label="Enviar correo para cotizar evento empresarial"
              >
                contacto@eventdesign.com.co
              </a>
            </p>

            {/* Teléfono con tracking */}
            <p className="small mb-2">
              📞{" "}
              <a
                href="tel:+573151138422"
                className="text-light text-decoration-none"
                aria-label="Llamar para cotizar evento empresarial"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag('event', 'click_telefono_footer', {
                      event_category: 'Contacto',
                      event_label: 'Telefono footer'
                    });
                  }

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'click_telefono_footer'
                  });
                }}
              >
                +57 315 113 8422
              </a>
            </p>

            {/* WhatsApp */}
            <p className="small mb-3">
              <a
                href="https://wa.me/573151138422?text=Hola,%20quiero%20cotizar%20un%20evento%20empresarial."
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
                aria-label="Cotizar evento empresarial por WhatsApp"
              >
                <FaWhatsapp className="me-2" />
                Cotizar por WhatsApp
              </a>
            </p>

            {/* Redes sociales premium */}
            <div className="social-icons">
              <a
                href="https://www.instagram.com/eventdesign.em"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram Event Design"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/14UjDR6DVdp/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Facebook Event Design"
              >
                <FaFacebook />
              </a>
            </div>

          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © {new Date().getFullYear()} Event Design · Producción de eventos y catering corporativo
        </div>

      </div>
    </footer>
  );
};

export default Footer;
