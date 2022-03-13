import "./main.css";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="50" height="50" />
        </Link>

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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link link" href="#">
                Pokemon
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                Pokedex
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">
                Leagues
              </a>
            </li>
          </ul>
          <div className="hstack gap-3">
            <button className="btn btn-success btn-lg">Login</button>
            <button className="btn btn-warning btn-lg">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
