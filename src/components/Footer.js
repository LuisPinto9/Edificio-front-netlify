import React from "react";
import "../css/styles.css";
import edificio from "../images/edificio.png";
import whatsapp from "../images/whatsapp.png";
import facebook from "../images/facebook.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-principal">
        <footer className="d-flex flex-wrap justify-content-between">
          <Link className="navbar-brand align-items-center px-3" to="/">
            <div className="d-flex d-inline-block align-items-center pt-1">
              <h4 className="titulo-footer px-2">Edificio K&C</h4>
              <img src={edificio} alt="Logo" width="45" height="45" />
            </div>
          </Link>
          <div className="px-4 pt-2 ">
            <h4 className="titulo-footer pt-1">Carrera 15 #4 - 10</h4>
          </div>
          <Link
            to="https://api.whatsapp.com/send?phone=573126126115"
            className="footer-links d-flex pt-1"
          >
            <h4 className="titulo-footer px-4 pt-2">3126126115</h4>
            <img src={whatsapp} alt="Logo" width="45" height="45" />
          </Link>
          <Link
            to="https://www.facebook.com/people/Edificio-KC/100066585776868/"
            className="footer-links d-flex pt-1 px-3"
          >
            <h4 className="titulo-footer px-4 pt-2">Facebook</h4>
            <img src={facebook} alt="Logo" width="45" height="45" />
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
