import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import eventImages from "../assets/utils/eventImages.js";


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

      const data = await res.json().catch(() => null);

      if (data && data.success) {
        setSubmitted(true);
        // 🔹 Disparar conversión Google Ads
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17856491630/7Pl1CMqOhYbEO7g0cJC',
      value: 1.0,
      currency: 'COP'
    });
  }
  // 🔹 Evento para Google Tag Manager
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'formulario_enviado',
  formulario: 'contacto_event_design'
});

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
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide(prev =>
      prev === eventImages.length - 1 ? 0 : prev + 1
    );
  }, 4000); // cambia cada 4 segundos

  return () => clearInterval(interval);
}, []);


  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-5">Solicita tu propuesta estratégica de evento</h2>

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
                  {loading ? "Enviando..." : "Recibir propuesta personalizada"}
                </button>
                <p className="text-center mt-3 small text-muted">
Respuesta en menos de 24 horas · Asesoría sin costo
</p>

              </form>
            ) : (
              <div className="thank-you-message text-center p-4 fade-in">
                <h3>¡Gracias por tu solicitud! 🎉</h3>
                <p>Pronto nos pondremos en contacto contigo.</p>
              </div>
            )}
          </div>

         <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
  <div
    style={{
      width: "450px",
      height: "300px",
      overflow: "hidden",
      borderRadius: "12px",
      backgroundColor: "#f8f8f8"
    }}
  >
    {eventImages.length > 0 && (
  <img
    src={eventImages[currentSlide]}
    alt="Evento"
    className="rounded shadow"
    style={{
      width: "100%",
      maxWidth: "450px",
      height: "300px",
      objectFit: "cover"
    }}
  />
)}

  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
