import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";

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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    cantidad: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    setSubmitted(true);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoEvento: "",
      cantidad: "",
      descripcion: ""
    });
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title text-center mb-5">Cotiza tu Evento</h2>

        <div className="contact-wrapper d-flex flex-wrap justify-content-center align-items-start gap-5">
          
          {/* Formulario */}
          <div className="form-container col-lg-5">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Teléfono"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Tipo de evento"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Cantidad de personas"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    className="premium-input"
                    placeholder="Descripción del evento"
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn-olive" disabled={loading}>
  {loading ? "Enviando..." : "Enviar solicitud"}
</button>

                </div>
              </form>
            ) : (
              <div className="thank-you-message text-center p-4 fade-in">
                <h3>¡Gracias por tu solicitud!</h3>
                <p>Pronto nos pondremos en contacto contigo.</p>
              </div>
            )}
          </div>

          {/* Carrusel */}
          <div className="carousel-container col-lg-6">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded shadow-sm">
                {images.map((img, idx) => (
                  <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                    <img src={img} className="d-block w-100" alt={`Evento ${idx + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;