import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa todas las imágenes
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/hero8.jpeg";
import hero9 from "../assets/hero9.jpeg";
import hero10 from "../assets/hero10.jpeg";
import hero11 from "../assets/hero11.jpeg";
import hero12 from "../assets/hero12.jpeg";
import hero13 from "../assets/hero13.jpeg";
import hero14 from "../assets/hero14.jpeg";
import hero15 from "../assets/hero15.jpeg";
import hero16 from "../assets/hero16.jpeg";
import hero17 from "../assets/hero17.jpeg";
import hero18 from "../assets/hero18.jpeg";

const images = [
  hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9,
  hero10, hero11, hero12, hero13, hero14, hero15, hero16, hero17, hero18
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel
  const prevSlide = () =>
    setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));

  // Oculta el mensaje luego de 5 segundos (opcional)
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-5">Cotiza tu Evento</h2>

        <div className="row justify-content-center align-items-start gap-4">

          {/* Formulario */}
          <div className="col-12 col-lg-5">
            {!submitted ? (
              <>
                <form
  className="contact-form"
  action="https://formsubmit.co/capitanmeseros2017@gmail.com"
  method="POST"
  target="hidden_iframe"
  onSubmit={() => setSubmitted(true)}
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_subject" value="Nueva cotización - Event Design" />

  <input name="nombre" className="premium-input mb-3" placeholder="Nombre" required />
  <input type="email" name="email" className="premium-input mb-3" placeholder="Email" required />
  <input name="telefono" className="premium-input mb-3" placeholder="Teléfono" required />
  <input name="tipoEvento" className="premium-input mb-3" placeholder="Tipo de evento" required />
  <input type="number" name="cantidad" className="premium-input mb-3" placeholder="Cantidad de personas" />
  <textarea name="descripcion" className="premium-input mb-3" placeholder="Descripción del evento" rows="4" />

  <button type="submit" className="btn-olive w-100">
    Enviar solicitud
  </button>
</form>

<iframe name="hidden_iframe" style={{ display: "none" }} />

              </>
            ) : (
              <div className="thank-you-message text-center p-4 fade-in">
                <h3>¡Gracias por tu solicitud! 🎉</h3>
                <p>Pronto nos pondremos en contacto contigo.</p>
              </div>
            )}
          </div>

          {/* Carrusel */}
          <div className="col-12 col-lg-6">
            <div className="carousel-container position-relative">
              <div className="carousel-inner rounded shadow-sm">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === currentSlide ? "active" : ""}`}
                    style={{ display: idx === currentSlide ? "block" : "none" }}
                  >
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={`Evento ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                onClick={prevSlide}
                style={{ position: "absolute", top: "50%", left: 0 }}
              >
                <span className="carousel-control-prev-icon" />
              </button>

              <button
                className="carousel-control-next"
                type="button"
                onClick={nextSlide}
                style={{ position: "absolute", top: "50%", right: 0 }}
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
