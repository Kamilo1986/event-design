import "../styles/Hero.css";

const heroImages = Array.from({ length: 18 }, (_, i) =>
  new URL(`../assets/hero${i + 1}.jpeg`, import.meta.url).href
);

const Hero = () => {
  return (
    <section className="hero">
      {/* Carrusel */}
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
              key={img}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenido */}
      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-title">
            Diseñamos experiencias inolvidables
          </h1>

          <p className="hero-subtitle">
            Eventos corporativos, sociales y personalizados
          </p>

          <a href="#contact" className="hero-btn">
            Cotiza tu evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
