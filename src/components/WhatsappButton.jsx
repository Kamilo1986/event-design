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
  href="https://wa.me/573151138422?text=Hola%2C%20quiero%20cotizar%20un%20evento%20empresarial.%20%C2%BFMe%20pueden%20enviar%20opciones%20y%20precios%3F"
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
