import "../styles/Services.css";
const services = [
  {
    title: "Experiencias Gastronómicas",
    description:
      "Creamos propuestas culinarias únicas que elevan cada evento a una experiencia memorable."
  },
  {
    title: "Eventos Corporativos",
    description:
      "Diseñamos y producimos eventos empresariales que fortalecen la marca y generan impacto."
  },
  {
    title: "Producción Empresarial & Megaeventos",
    description:
      "Producción integral de gran escala con logística, montaje y ejecución de alto nivel."
  }
];

const Services = () => (
  <section id="services" className="container py-5">
    <h2 className="text-center mb-4">Nuestros Servicios</h2>

    <div className="row g-4">
      {services.map((service) => (
        <div className="col-md-4" key={service.title}>
          <div className="card service-card">
            <div className="card-body text-center">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
