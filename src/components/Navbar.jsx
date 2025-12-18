import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-olive">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          Event Design
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
