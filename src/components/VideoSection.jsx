import "../styles/VideoSection.css";

const VideoSection = () => {
  return (
    <section id="video" className="video-section">
      <div className="video-wrapper">

        <h2 className="video-title">
          Así diseñamos experiencias para empresas – Vive la experiencia Event Design
        </h2>

        <div className="video-frame">
          <video
            controls
            preload="metadata"
            width="100%"
            poster="/images/video-thumbnail.jpg"
          >
            <source src="/video/eventdesign.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;