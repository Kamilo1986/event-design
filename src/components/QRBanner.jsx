import React, { useEffect } from "react";
import "../styles/QRBanner.css";

import qr1 from "../assets/Qr/qr1.webp";
import qr2 from "../assets/Qr/qr2.webp";
import qr3 from "../assets/Qr/qr3.webp";
import qr4 from "../assets/Qr/qr4.webp";
import qr5 from "../assets/Qr/qr5.webp";
import qr6 from "../assets/Qr/qr6.webp";
import qr7 from "../assets/Qr/qr7.webp";
import qr8 from "../assets/Qr/qr8.webp";
import qr9 from "../assets/Qr/qr9.webp";
import qr10 from "../assets/Qr/qr10.webp";
import qr12 from "../assets/Qr/qr12.webp";

const qrData = [
  { img: qr1, alt: "QR1", label: "SABORES DEL DESIERTO", link: "https://tinyurl.com/m2wnkma6" },
  { img: qr2, alt: "QR2 ", label: "ARROCES INTERNACIONALES",  link: "https://tinyurl.com/Arroces-internacionales" },
  { img: qr3, alt: "QR3", label: "ASIA",  link: "https://tinyurl.com/mu4xphaa" },
  { img: qr4, alt: "QR4", label: "MEDITERRANEA",  link: "https://tinyurl.com/5385kbm6" },
  { img: qr5, alt: "QR5", label: "BRUNCH TIPICO", link: "https://tinyurl.com/brunchtipico" },
  { img: qr6, alt: "QR6", label: "MEXICO LINDO Y QUERIDO", link: "https://tinyurl.com/4kp2dcr7" },
  { img: qr7, alt: "QR7", label: "LA DOLCE VITA TE ESPERA", link: "https://tinyurl.com/362nnrc7" },
  { img: qr8, alt: "QR8", label: "EL ARTE A LA PARRILLA", link: "https://tinyurl.com/y9cctnwt" },
  { img: qr9, alt: "QR9", label: "MIXOLOGIA", link: "https://tinyurl.com/yxcanhcy" },
  { img: qr10,alt: "QR10", label: "GASTRO-DRINKS", link: "https://tinyurl.com/3yrs9wpw" },
  { img: qr12,alt: "QR12", label: "COFFEE EXPERIENCE", link: "https://tinyurl.com/2hdajzj6" }
];


const QRBanner = () => {
  return (
    <section id="QRBanner" className="qr-banner">

      {/* Fondo partículas */}
      <div className="particles"></div>

      <div className="qr-content">
        <h2> Quieres conocer mas sobre nosotros? </h2>
        <p>👇Escanea o haz clic en nuestros QR👇</p>

        {/* Carrusel infinito */}
        <div className="qr-carousel">
          <div className="qr-track">
            {[...qrData, ...qrData].map((qr, index) => (
<a
  key={index}
  href={qr.link}
  target="_blank"
  rel="noreferrer"
  className="qr-card"
>
  <span className="qr-label">{qr.label}</span>
  <img src={qr.img} alt={qr.label} />
</a>


            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QRBanner;