import { useState, useEffect } from "react";
import "../styles/ServiceCards.css";

const servicesData = [
  {
    id: 1,
    title: "🥐 Desayunos",
    description: "Servicio de catering para desayunos empresariales con panadería artesanal, opciones saludables y presentación ejecutiva.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Desayunos/desayuno${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar un Desayuno 🥐"
  },
  {
    id: 2,
    title: "🥟 Pasabocas",
    description: "Selección de pasabocas gourmet y bocados salados ideales para lanzamientos, reuniones y celebraciones empresariales.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Pasabocas/pasabocas${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar Pasabocas para un evento 🥟"
  },
  {
    id: 3,
    title: "🍽️ Catering Premium",
    description: "Propuesta culinaria diseñada por chefs profesionales con estaciones en vivo, menús personalizados y montaje de alto nivel.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Gastro/gastro${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero una Experiencia Gastronómica 🍽️"
  },
  {
    id: 4,
    title: "🍸 Coctelería",
    description: "Servicio de bar móvil con mixología profesional, cartas personalizadas y montaje premium para eventos sociales y empresariales.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Coctel/coctel${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar servicio de Coctelería 🍸"
  },
  {
    id: 5,
    title: "☕ Experiencias de Café",
    description: "Estaciones de café con baristas profesionales, métodos artesanales y presentación temática.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Cafe/cafe${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero una Experiencia de Café ☕"
  },
  {
    id: 6,
    title: "🍴 Servicio Integral",
    description: "Planeación y ejecución completa del servicio de catering para eventos de gran formato, incluyendo logística, montaje y coordinación.",
    images: Array.from({ length: 3 }, (_, i) =>
      new URL(`../assets/services/Corporativo/corporativo${i+1}.webp`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar un evento Corporativo 🏢"
  }
];

export default function ServiceCards() {
  const [activeId, setActiveId] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (!activeId) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const service = servicesData.find(s => s.id === activeId);
        const total = service.images.length;

        return {
          ...prev,
          [activeId]: ((prev[activeId] || 0) + 1) % total
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeId]);

  const toggleCard = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setCurrentImage(prev => ({ ...prev, [id]: 0 }));
      setActiveId(id);
    }
  };

  const handleWhatsappClick = (e, service) => {
    e.preventDefault();

    // 🔹 Enviar evento a GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_whatsapp_service",
      servicio: service.title
    });

    // 🔹 Abrir WhatsApp después de enviar evento
    const url = `https://wa.me/573151138422?text=${encodeURIComponent(service.whatsappMessage)}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  return (
    <section className="servicecards-section">
      <div className="servicecards-wrapper">

        <h2>Servicios de catering y propuestas gastronómicas para eventos empresariales</h2>

        <div className="container">
          <div className="row">

            {servicesData.map((service) => (
              <div key={service.id} className="col-12 col-md-6 mb-4">
                <div className="card-box">

                  <div
                    className="card-header"
                    onClick={() => toggleCard(service.id)}
                  >
                    <h4>{service.title}</h4>
                    <span>{activeId === service.id ? "−" : "+"}</span>
                  </div>

                  {activeId === service.id && (
                    <div className="card-content fade-in">

                      <div className="carousel-box">
                        <img
                          src={service.images[currentImage[service.id] || 0]}
                          alt={`${service.title} para eventos`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <p>{service.description}</p>

                      <a
                        href="#"
                        onClick={(e) => handleWhatsappClick(e, service)}
                        className="btn-whatsapp"
                      >
                        Cotizar por WhatsApp
                      </a>

                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}