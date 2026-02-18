import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsappButton = () => {

  const handleWhatsappClick = () => {

    // 🔹 Google Ads
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17856491630/7Pl1CMqOhYbEO7g0cJC',
        value: 1.0,
        currency: 'COP'
      });
    }

    // 🔹 Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click_whatsapp_floating',
      origen: 'boton_flotante'
    });
  };

  return (
    <a 
  href="https://wa.me/573151138422?text=Hola,%20quiero%20cotizar%20un%20evento%20corporativo.%20¿Me%20pueden%20enviar%20información%20y%20opciones%20disponibles?"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp"
  aria-label="Cotizar evento corporativo por WhatsApp"
  onClick={handleWhatsappClick}
>
  <FaWhatsapp />
  <span className="whatsapp-tooltip">
    Cotiza tu evento ahora
  </span>
</a>

  );
};

export default WhatsappButton;
