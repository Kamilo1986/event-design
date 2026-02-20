import "../styles/Hero.css";

const heroImages = Array.from({ length: 3 }, (_, i) =>
  `/hero/hero${i + 1}.webp`
);

const Hero = () => {
  return (
    <section
      className="hero"
      role="banner"
      aria-label="Producción de eventos corporativos en Bogotá"
    >
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade hero-carousel"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="hero-slide"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-inner">
          <span className="hero-pretitle">
            Especialistas en eventos corporativos para empresas en Bogotá
          </span>

          <h1 className="hero-title">
            Eventos corporativos estratégicos en Bogotá que elevan la experiencia de marca
          </h1>

          <span className="seo-hidden">
            Producción de eventos empresariales en Bogotá, activaciones de marca,
            eventos corporativos y experiencias gastronómicas premium para empresas.
          </span>

          <p className="hero-subtitle">
            Diseñamos, producimos y ejecutamos experiencias corporativas end-to-end que conectan gastronomía, concepto y logística para empresas que buscan resultados reales.
          </p>

          <a
            href="#contact"
            className="hero-btn"
            onClick={(e) => {
              e.preventDefault();

              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({ event: "click_hero_cta" });

              if (window.gtag) {
                window.gtag("event", "click_hero_cta", {
                  event_category: "CTA",
                  event_label: "Hero boton propuesta",
                });
              }

              setTimeout(() => {
                window.location.href = "#contact";
              }, 150);
            }}
          >
            Solicitar propuesta estratégica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;