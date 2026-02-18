import "../styles/Services.css";

const services = [
  {
    title: "Experiencias Gastronómicas para Eventos Corporativos",
    description:
      "Desarrollamos experiencias gastronómicas corporativas diseñadas para fortalecer la imagen de marca y generar recordación en eventos empresariales y activaciones estratégicas."
,
      whatsappMessage: "Hola, quiero más información sobre sus Experiencias Gastronómicas."
  },
  {
    title: "Organización de Eventos Corporativos en Bogotá",
    description:
      "Diseñamos y producimos eventos corporativos en Bogotá para empresas y marcas que buscan impacto estratégico, posicionamiento y experiencias memorables.",
  whatsappMessage: "Hola, quiero más información sobre sus Eventos Corporativos."
    },
  {
    title: "Producción de Eventos Empresariales y Megaeventos",
    description:
      "Ofrecemos producción integral de eventos empresariales y megaeventos con logística avanzada, montaje profesional y ejecución de alto nivel para marcas y compañías.",
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
      <h2 className="text-center mb-4">Servicios de Catering y producción de eventos corporativos en Bogotá</h2>
<p className="seo-hidden">
Empresa especializada en eventos corporativos, activaciones de marca,
producción empresarial y experiencias gastronómicas premium en Bogotá.
</p>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-12 col-md-4" key={service.title}>
            
            <div 
              className="card service-card text-center"
              style={{ cursor: "pointer" }}
              onClick={() => handleWhatsappClick(service)}
            >
              <div className="card-body">
                <h3>{service.title}</h3>
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