import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-olive">
      <div className="container navbar-container">

        {/* Logo + Brand */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="/logo event designblanco2.png"
            alt="Logo Event Design"
            className="navbar-logo"
          />
          <a className="navbar-brand fw-semibold text-white m-0" href="#">
            DISEÑO DE EXPERIENCIAS GASTRONÓMICAS CORPORATIVAS PREMIUM
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
