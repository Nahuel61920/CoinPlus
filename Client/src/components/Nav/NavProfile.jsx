import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

import "./nav.css";

function OffcanvasExample({ logo }) {
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
                  Perfil
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="nav-togle-user">
                <Nav className="justify-content-end flex-grow-1 pe-3 text-primary nav-market">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Inicio
                  </Link>
                  <Link to="/user">Perfil</Link>
                  <Link to="/market">Mercado</Link>
                  <Link to="/wallet">Billetera</Link>
                  <Link to="/movements">Movimientos</Link>
                  <Link to="/operation">Compra-Venta</Link>
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
