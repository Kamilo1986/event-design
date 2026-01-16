import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsappButton = () => {

  const handleWhatsappClick = () => {
    // 🔹 Dispara conversión Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17856491630/7Pl1CMqOhYbEO7g0cJC',
        'value': 1.0,
        'currency': 'COP'
      });
    }
  };

  return (
    <a 
      href="https://wa.me/573151138422"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      onClick={handleWhatsappClick}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
