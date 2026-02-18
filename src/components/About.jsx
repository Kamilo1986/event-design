import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        <h2 className="about-title">Diseño y producción estratégica de experiencias empresariales</h2>
        <p className="about-subtitle">
          Producción estratégica de eventos corporativos y experiencias premium en Bogotá
        </p>

        <div className="about-text">
  <p>
    <strong>Event Design</strong>  Es una empresa especializada en producción de eventos
y experiencias gastronómicas premium. Con más de 20 años de trayectoria,
creamos proyectos que fortalecen marcas, generan posicionamiento y elevan
la percepción de las compañías ante sus audiencias.

  </p>

  <p>
    Nuestro equipo combina estrategia, creatividad y ejecución operativa para producir
    eventos memorables con estándares premium. Hemos desarrollado proyectos para eventos
    empresariales, activaciones de marca, celebraciones corporativas y producciones de alto impacto
    con capacidad de atención superior a 10.000 asistentes.
  </p>
</div>
        <div className="about-cards">

          <div className="about-card">
    <h3>Enfoque</h3>
    <p>
      Diseñamos eventos que no solo celebran, sino que comunican, posicionan y generan
      resultados para las marcas. Cada proyecto se construye con visión estratégica,
      estética cuidada y ejecución impecable.
    </p>
  </div>

  <div className="about-card">
    <h3>Objetivo</h3>
    <p>
      Convertir cada evento en una herramienta de posicionamiento para nuestros clientes,
      creando experiencias que impacten audiencias, refuercen reputación y generen recordación.
    </p>
  </div>
        </div>
      </div>
    </section>
  );
}
