import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

import "./nav.css";
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Language';

function OffcanvasExample({ logo }) {
  const idioma = useContext(langContext);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="px-md-5 px-1"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <div className="navbar-imge" width="150"></div>
              </Link>
            </Navbar.Brand>
            <div className="d-flex gap-2 align-items-center">
              <DarkMode />
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="btn-navProfile"
              />
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-nav-user">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <FormattedMessage
                    id='Perfil'
                    defaultMessage='Profile'
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="nav-togle-user">
                <Nav className="justify-content-end flex-grow-1 pe-3 text-primary nav-market">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <FormattedMessage
                      id='Inicio'
                      defaultMessage='Home'
                    />
                  </Link>
                  <Link to="/user"><FormattedMessage
                    id='Usuario'
                    defaultMessage='User'
                  /></Link>
                  <Link to="/market"><FormattedMessage
                    id='Mercado'
                    defaultMessage='Market'
                  /></Link>
                  <Link to="/wallet"><FormattedMessage
                    id='Billetera'
                    defaultMessage='Wallet'
                  /></Link>
                  <Link to="/movements"><FormattedMessage
                    id='Movimiento'
                    defaultMessage='Moves'
                  /></Link>
                  <Link to="/operation"><FormattedMessage
                    id='Comprar'
                    defaultMessage='Buy Sell'
                  /></Link>
                  <div className="dropdown px-0 py-2">
                    <button
                      onClick={() => idioma.selectLanguage("es-ES")}
                      className="btn btn-outline-primary"
                    >
                      ES
                    </button>
                    <button
                      onClick={() => idioma.selectLanguage("en-US")}
                      className="btn btn-outline-primary"
                    >
                      EN
                    </button>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
