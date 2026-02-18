import "../styles/VideoSection.css";
import videoFile from "../assets/video/eventdesign.mp4";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-wrapper">

        <h2 className="video-title">
          Así diseñamos experiencias para empresas Vive la experiencia Event Design
        </h2>

        <div className="video-frame">
          <video 
            src={videoFile}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
