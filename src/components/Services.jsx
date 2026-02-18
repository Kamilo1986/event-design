import "../styles/Services.css";

const services = [
  {
    title: "Experiencias Gastronómicas para Eventos Corporativos",
    description:
      "Creamos propuestas culinarias únicas que elevan cada evento a una experiencia memorable.",
      whatsappMessage: "Hola, quiero más información sobre sus Experiencias Gastronómicas."
  },
  {
    title: "Organización de Eventos Corporativos en Bogotá",
    description:
      "Diseñamos y producimos eventos empresariales que fortalecen la marca y generan impacto.",
  whatsappMessage: "Hola, quiero más información sobre sus Eventos Corporativos."
    },
  {
    title: "Producción de Eventos Empresariales y Megaeventos",
    description:
      "Producción integral de gran escala con logística, montaje y ejecución de alto nivel.",
  whatsappMessage: "Hola, quiero más información sobre Producción Empresarial y Megaeventos."
  }
];
const Services = () => {

  const handleWhatsappClick = (service) => {

    // Conversión Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17856491630/7Pl1CMqOhYbEO7g0cJC',
        'value': 1.0,
        'currency': 'COP'
      });
    }
// Evento para Google Tag Manager
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'click_servicio',
  servicio: service.title
});

    // 👉 Mensaje individual por servicio
    const url = `https://wa.me/573151138422?text=${encodeURIComponent(service.whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className="container-fluid py-5">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.title}>
            
            <div 
              className="card service-card text-center"
              style={{ cursor: "pointer" }}
              onClick={() => handleWhatsappClick(service)}
            >
              <div className="card-body">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <small style={{ opacity: 0.7 }}>
                  Hablar con asesor especializado →

                </small>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;