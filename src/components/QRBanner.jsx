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
  { img: qr1,  label: "", link: "https://qr.link/xXZdzj" },
  { img: qr2,  label: "",  link: "https://qr.link/Fuvb1Y" },
  { img: qr3,  label: "",  link: "https://qr.link/GBNhLE" },
  { img: qr4,  label: "",  link: "https://qr.codes/HX2mOK" },
  { img: qr5,  label: "", link: "https://qr.codes/VhdBrT" },
  { img: qr6,  label: "", link: "https://qr.link/gtydvN" },
  { img: qr7,  label: "", link: "https://qr.codes/bv3Z71" },
  { img: qr8,  label: "", link: "https://qr.link/04fatp" },
  { img: qr9,  label: "", link: "https://qr.link/cfmPkM" },
  { img: qr10, label: "", link: "https://experienciabrunchtipico.my.canva.site/brochure-events-design" },
  { img: qr11, label: "", link: "https://qr.codes/YBSGyo" },
  { img: qr12, label: "", link: "https://qr.codes/ncAe6S" }
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
                <img src={qr.img} alt="QR Event Design" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default QRBanner;