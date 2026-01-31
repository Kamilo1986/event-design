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
import qr12 from "../assets/Qr/qr12.jpeg";

const qrData = [
  { img: qr1,  label: "SABORES DEL DESIERTO", link: "https://tinyurl.com/m2wnkma6" },
  { img: qr2,  label: "ARROCES INTERNACIONALES",  link: "https://tinyurl.com/Arroces-internacionales" },
  { img: qr3,  label: "ASIA",  link: "https://tinyurl.com/mu4xphaa" },
  { img: qr4,  label: "MEDITERRANEA",  link: "https://tinyurl.com/5385kbm6" },
  { img: qr5,  label: "BRUNCH TIPICO", link: "https://tinyurl.com/brunchtipico" },
  { img: qr6,  label: "MEXICO LINDO Y QUERIDO", link: "https://tinyurl.com/4kp2dcr7" },
  { img: qr7,  label: "LA DOLCE VITA TE ESPERA", link: "https://tinyurl.com/362nnrc7" },
  { img: qr8,  label: "EL ARTE A LA PARRILLA", link: "https://tinyurl.com/y9cctnwt" },
  { img: qr9,  label: "MIXOLOGIA", link: "https://tinyurl.com/yxcanhcy" },
  { img: qr10, label: "GASTRODRINKS", link: "https://tinyurl.com/3yrs9wpw" },
  { img: qr12, label: "COFFEE EXPERIENCE", link: "https://tinyurl.com/2hdajzj6" }
];


const QRBanner = () => {
  return (
    <section className="qr-banner">

      {/* Fondo partículas */}
      <div className="particles"></div>

      <div className="qr-content">
        <h2>Conéctate con Event Design</h2>
        <p>Escanea o haz clic en nuestros QR</p>

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