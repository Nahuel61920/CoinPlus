import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom'
import DarkMode from '../DarkMode/DarkMode';
import Profile from "../Profile/Profile";

function OffcanvasExample({logo}) {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="px-md-5 px-1">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to='/'>
              <div className="navbar-imge" width="150">
            
            </div>
              </Link>
            </Navbar.Brand>
            <div className="d-flex gap-2 align-items-center">
              <DarkMode/>
              <Profile />
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className="btn-navProfile"/>
              
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
                <Nav className="justify-content-end flex-grow-1 pe-3 text-primary">
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                </Link>
                <Link to='/user'>
                   <Nav.Link href="#action2">Perfil</Nav.Link>
                </Link>
                <Link to='/wallet'>
                   <Nav.Link href="#action2">Mi billetera</Nav.Link>
                </Link>
                <Link to='/movements'>
                <Nav.Link href="#action3">Movimientos</Nav.Link>
                </Link>
                <Link to='/operation'>
                <Nav.Link href="#action4">Compra-Venta</Nav.Link>
                </Link>      
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