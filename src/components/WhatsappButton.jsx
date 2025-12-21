import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsappButton.css";

const WhatsappButton = () => (
  <a
    href="https://wa.me/573151134822"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsappButton;
