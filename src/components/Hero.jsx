import "../styles/Hero.css";

const heroImages = Array.from({ length: 18 }, (_, i) =>
  `/hero/hero${i + 1}.jpeg`
);

const Hero = () => {
  return (
    <section className="hero" role="banner" aria-label="Producción de eventos corporativos en Bogotá">
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
          <h1 className="hero-title">
            Producción de eventos corporativos y experiencias gastronómicas en Bogotá para empresas
          </h1>
<span className="seo-hidden">
Producción de eventos empresariales en Bogotá, activaciones de marca,
eventos corporativos y experiencias gastronómicas premium para empresas.
</span>

          <p className="hero-subtitle">
            Diseñamos eventos corporativos estratégicos para marcas que buscan impacto real.
          </p>
          <a
  href="#contact"
  className="hero-btn"
  onClick={() => {
    if (window.gtag) {
      window.gtag('event', 'click_hero_cta', {
        event_category: 'CTA',
        event_label: 'Hero boton propuesta'
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_hero_cta'
    });
  }}
>
  Quiero una propuesta para mi evento
</a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
