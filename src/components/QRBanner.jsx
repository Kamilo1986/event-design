import React, { useEffect } from "react";
import "../styles/QRBanner.css";

import qr1 from "../assets/Qr/qr1.jpeg";
import qr2 from "../assets/Qr/qr2.jpeg";
import qr3 from "../assets/Qr/qr3.jpeg";
import qr4 from "../assets/Qr/qr4.jpeg";
import qr5 from "../assets/Qr/qr5.jpeg";
import qr6 from "../assets/Qr/qr6.jpeg";
import qr7 from "../assets/Qr/qr7.jpeg";
import qr8 from "../assets/Qr/qr8.jpeg";
import qr9 from "../assets/Qr/qr9.jpeg";
import qr10 from "../assets/Qr/qr10.jpeg";
import qr11 from "../assets/Qr/qr11.jpeg";
import qr12 from "../assets/Qr/qr12.jpeg";

const qrData = [
  { img: qr1,  label: "Instagram", link: "https://instagram.com/eventdesign" },
  { img: qr2,  label: "Facebook",  link: "https://facebook.com/eventdesign" },
  { img: qr3,  label: "WhatsApp",  link: "https://wa.me/573151138422" },
  { img: qr4,  label: "Catálogo",  link: "https://eventdesign.com.co/catalogo" },
  { img: qr5,  label: "Portafolio", link: "https://eventdesign.com.co/portafolio" },
  { img: qr6,  label: "TikTok", link: "https://tiktok.com/@eventdesign" },
  { img: qr7,  label: "YouTube", link: "https://youtube.com/@eventdesign" },
  { img: qr8,  label: "Pinterest", link: "https://pinterest.com/eventdesign" },
  { img: qr9,  label: "Formulario", link: "https://eventdesign.com.co/contacto" },
  { img: qr10, label: "Ubicación", link: "https://goo.gl/maps/xxxx" },
  { img: qr11, label: "Reservas", link: "https://eventdesign.com.co/reservas" },
  { img: qr12, label: "Email", link: "mailto:contacto@eventdesigner.com.co" }
];

const QRBanner = () => {

  // Animación suave al hacer scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".qr-card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="qr-banner">

      {/* Fondo de partículas */}
      <div className="particles"></div>

      <div className="qr-content">
        <h2>Conéctate con Event Design</h2>
        <p>Escanea o haz clic en nuestros códigos QR</p>

        <div className="qr-grid">
          {qrData.map((qr, index) => (
            <a key={index} href={qr.link} target="_blank" rel="noreferrer">
              <div className="qr-card">
                <img src={qr.img} alt={qr.label} />
                <span>{qr.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default QRBanner;
