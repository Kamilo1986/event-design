import "../styles/ClientLogos.css";

const clientLogos = [
  { src: "/clients/logo1.png", featured: true, name: "Cliente corporativo 1" },
  { src: "/clients/logo2.png", featured: false, name: "Cliente corporativo 2" },
  { src: "/clients/logo3.png", featured: true, name: "Cliente corporativo 3" },
  { src: "/clients/logo4.png", featured: false, name: "Cliente corporativo 4" },
  { src: "/clients/logo5.png", featured: false, name: "Cliente corporativo 5" },
  { src: "/clients/logo6.png", featured: true, name: "Cliente corporativo 6" },
  { src: "/clients/logo7.png", featured: false, name: "Cliente corporativo 7" },
  { src: "/clients/logo8.png", featured: true, name: "Cliente corporativo 8" }
];

export default function ClientLogos() {
  return (
    <section className="clients-section" aria-labelledby="clientes-title">
      <div className="container text-center">

        {/* SEO SEMANTICO */}
        <h2 id="clientes-title" className="clients-title">
          Empresas y marcas que confían en Event Design
        </h2>

        {/* SLIDER LOGOS */}
        <div className="clients-slider">
          <div className="clients-track">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <div
                key={index}
                className={`client-item ${logo.featured ? "featured" : ""}`}
              >
                <img
                  src={logo.src}
                  alt={`Logo cliente ${logo.name}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* MICRO FRANJA AUTORIDAD (CRO PREMIUM) */}
        <div className="authority-bar">

          <div className="authority-item">
            <span className="authority-number">+120</span>
            <p>Experiencias corporativas producidas</p>
          </div>

          <div className="authority-item">
            <span className="authority-number">Empresas</span>
            <p>Confían en nuestra metodología</p>
          </div>

          <div className="authority-item">
            <span className="authority-number">360°</span>
            <p>Producción integral end-to-end</p>
          </div>

        </div>

      </div>
    </section>
  );
}
