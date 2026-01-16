import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        <h2 className="about-title">Event Design</h2>
        <p className="about-subtitle">
          Más de 20 años creando experiencias inolvidables
        </p>

        <div className="about-text">
          <p>
            <strong>Event Design</strong> es una empresa con más de 20 años de
            experiencia en la industria de los eventos. Contamos con un equipo
            creativo y operativo altamente capacitado, capaz de atender hasta
            10.000 personas con máxima eficiencia, calidad y atención al detalle.
          </p>

          <p>
            Nos especializamos en crear <strong>experiencias inmersivas</strong>,
            donde cada invitado vive momentos memorables. Escuchamos de primera
            mano las necesidades de nuestros clientes para transformar sus ideas
            en eventos únicos, elegantes y perfectamente ejecutados.
          </p>
        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>Misión</h3>
            <p>
              Transformar los sueños de nuestros clientes en realidades
              memorables, diseñando y produciendo eventos innovadores que superen
              expectativas, con excelencia operativa, creatividad constante y
              atención personalizada.
            </p>
          </div>

          <div className="about-card">
            <h3>Visión</h3>
            <p>
              Ser la empresa número uno en diseño y producción de eventos,
              rompiendo esquemas tradicionales y liderando la industria con
              experiencias impactantes, inmersivas y de alto valor emocional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
