import { Link } from 'react-router-dom';
import { useState } from 'react';
import Profile from './images/profile.jpeg';
import { useNavigate } from 'react-router-dom';
import DropDownProfile from './dropdownprofile';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/loginpage")
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex align-items-center justify-content-center">
      <div className="container-fluid w-75">
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
              <Link className="nav-link text-dark" to="/services"><b>Services</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/careers"><b>Careers</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contacts"><b>Contacts</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/shop"><b>Shop</b></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container align-items-center justify-content-end w-25'>
        <button className='btn btn-success m-2' type='submit' onClick={handleRegisterClick}>Register</button>
        <button className='btn btn-light m-2 border' type='submit' onClick={handleLoginClick}>Login</button>
        <div class="btn-group m-0 p-0">
          <button type="button" class="btn">
            <img src={Profile} alt="Profile Picture" class="rounded-circle" style={{ width: '40px', height: '40px' }} />
            {/* <DropDownProfile/> */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
