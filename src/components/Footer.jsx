const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <h5 className="mb-2">Event Design</h5>
        <p className="mb-1">Creamos experiencias únicas e inolvidables</p>
        <small>© {new Date().getFullYear()} Event Design. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
