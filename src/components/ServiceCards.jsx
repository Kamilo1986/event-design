import { useState, useEffect } from "react";
import "../styles/ServiceCards.css";

const servicesData = [
  {
    id: 1,
    title: "🥐 Desayunos",
    description: "Desayunos corporativos con presentación premium.",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/desayunos/desayuno${i+1}.jpg`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar un Desayuno  🎁"
  },
  {
    id: 2,
    title: "🥟 Pasabocas",
    description: "Pasabocas gourmet ideales para tus eventos.",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/pasabocas/pasabocas${i+1}.jpg`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero cotizar Pasabocas para un evento 🎉"
  },
  {
    id: 3,
    title: "🍽️ Experiencias Gastronómicas",
    description: "Menús exclusivos diseñados por chefs profesionales.",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/gastro/gastro${i+1}.jpg`, import.meta.url).href
    ),
    whatsappMessage: "Hola, quiero una Experiencia Gastronómica 🍷"
  },
  {
    id: 4,
    title: "🍸 Coctelería",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/coctel/coctel${i+1}.jpg`, import.meta.url).href
    ),
    description: "Mixologia y Bar móvil premium para tus celebraciones.",
    whatsappMessage: "Hola, quiero cotizar servicio de Coctelería 🍸"
  },
  {
    id: 5,
    title: "☕ Experiencias de Café",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/cafe/cafe${i+1}.jpg`, import.meta.url).href
    ),
    description: "Catas y Estaciones de café especial.",
    whatsappMessage: "Hola, quiero una Experiencia de Café ☕"
  },
  {
    id: 6,
    title: "🏢 Corporativo",
    images: Array.from({ length: 4 }, (_, i) =>
      new URL(`../assets/services/corporativo/corporativo${i+1}.jpg`, import.meta.url).href
    ),
    description: "Servicios gastronómicos empresariales premium.",
    whatsappMessage: "Hola, quiero cotizar un evento Corporativo 🏢"
  }
];

export default function ServiceCards() {
  const [activeId, setActiveId] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const updated = { ...prev };
        servicesData.forEach((service) => {
          const total = service.images.length;
          updated[service.id] = ((prev[service.id] || 0) + 1) % total;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleCard = (id) => {
    setActiveId(activeId === id ? null : id);
  };
const handleWhatsappClick = (service) => {
  if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17856491630/7Pl1CMqOhYbEO7g0cJC',
        'value': 1.0,
        'currency': 'COP'
      });
    }
    // 🔹 Abrir WhatsApp
    const url = `https://wa.me/573151138422?text=${encodeURIComponent(service.whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="servicecards-section">
  <div className="servicecards-wrapper">

      <h2>Nuestros Servicios Especiales</h2>

      <div className="container">
        <div className="row">

          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 mb-4">
              <div className="card-box">

                <div 
                  className="card-header"
                  onClick={() => toggleCard(service.id)}
                >
                  <h5>{service.title}</h5>
                  <span>{activeId === service.id ? "−" : "+"}</span>
                </div>

                {activeId === service.id && (
                  <div className="card-content fade-in">

                    <div className="carousel-box">
                      <img
                        src={service.images[currentImage[service.id] || 0]}
                        alt={service.title}
                      />
                    </div>

                    <p>{service.description}</p>

                    <a
                      href={`https://wa.me/573151138422?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noreferrer"
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
