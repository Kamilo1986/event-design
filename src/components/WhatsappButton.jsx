import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsappButton = () => {

  const handleWhatsappClick = (e) => {
  e.preventDefault();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'click_whatsapp_floating',
    origen: 'boton_flotante'
  });

  setTimeout(() => {
    window.open(
      "https://wa.me/573151138422?text=Hola,%20quiero%20cotizar%20un%20evento%20corporativo.%20¿Me%20pueden%20enviar%20información%20y%20opciones%20disponibles?",
      "_blank"
    );
  }, 300);
};

  return (
   <a 
  href="#"
  onClick={handleWhatsappClick}
  className="whatsapp"
  aria-label="Cotizar evento corporativo por WhatsApp"
>
  <FaWhatsapp />
  <span className="whatsapp-tooltip">
    Cotiza tu evento ahora
  </span>
</a>

  );
};

export default WhatsappButton;
