import "../styles/ClientLogos.css";

const clientLogos = [
  { src: "/clients/logo1.png", featured: true },
  { src: "/clients/logo2.png", featured: false },
  { src: "/clients/logo3.png", featured: true },
  { src: "/clients/logo4.png", featured: false },
  { src: "/clients/logo5.png", featured: false },
  { src: "/clients/logo6.png", featured: true },
  { src: "/clients/logo7.png", featured: false },
  { src: "/clients/logo8.png", featured: true }
];

export default function ClientLogos() {
  return (
    <section className="clients-section">
      <div className="container text-center">
        <h2 className="clients-title">
          Marcas que han confiado en nosotros
        </h2>

        <div className="clients-slider">
          <div className="clients-track">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <div
                key={index}
                className={`client-item ${
                  logo.featured ? "featured" : ""
                }`}
              >
                <img src={logo.src} alt="Empresa cliente" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
