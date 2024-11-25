import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>Agrivive</b></Link> {/* Brand navigation */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about"><b>About Us</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contacts"><b>Contacts</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/services"><b>Services</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/careers"><b>Careers</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/shop"><b>Shop</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
