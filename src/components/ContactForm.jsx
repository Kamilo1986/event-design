import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Imágenes
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
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    cantidad: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://eventdesign.com.co/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          tipoEvento: "",
          cantidad: "",
          descripcion: ""
        });
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      alert("Error de conexión.");
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
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-5">Cotiza tu Evento</h2>

        <div className="row justify-content-center gap-4">

          <div className="col-12 col-lg-5">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input name="nombre" value={formData.nombre} onChange={handleChange} className="premium-input mb-3" placeholder="Nombre" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="premium-input mb-3" placeholder="Email" required />
                <input name="telefono" value={formData.telefono} onChange={handleChange} className="premium-input mb-3" placeholder="Teléfono" required />
                <input name="tipoEvento" value={formData.tipoEvento} onChange={handleChange} className="premium-input mb-3" placeholder="Tipo de evento" required />
                <input type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} className="premium-input mb-3" placeholder="Cantidad de personas" />
                <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="premium-input mb-3" placeholder="Descripción del evento" rows="4" />

                <button type="submit" className="btn-olive w-100" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            ) : (
              <div className="thank-you-message text-center p-4 fade-in">
                <h3>¡Gracias por tu solicitud! 🎉</h3>
                <p>Pronto nos pondremos en contacto contigo.</p>
              </div>
            )}
          </div>

          <div className="col-12 col-lg-6">
            <img src={images[currentSlide]} className="w-100 rounded" alt="Evento" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
