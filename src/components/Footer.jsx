import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <h5 className="mb-2">Event Design</h5>
        <p className="mb-1">Creamos experiencias únicas e inolvidables</p>

        {/* Información de contacto */}
        <p className="mb-1">
          📧 <a href="mailto:contacto@eventdesign.com.co" className="text-light text-decoration-none">contacto@eventdesign.com.co</a> <br />
          📞 <a href="tel:+573151138422" className="text-light text-decoration-none">315 113 8422</a>
        </p>

        {/* Redes sociales */}
        <div className="mb-2">
          <a href="https://www.instagram.com/eventdesign.em?igsh=cjh4M2F5YzRwNWsz" target="_blank" rel="noopener noreferrer" className="text-light mx-2 fs-4">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/14UjDR6DVdp/" target="_blank" rel="noopener noreferrer" className="text-light mx-2 fs-4">
            <FaFacebook />
          </a>
        </div>

        <small>© {new Date().getFullYear()} Event Design. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
