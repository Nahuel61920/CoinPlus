import React from 'react'
import Logo from '../../assets/img/coin+Blan.png'
import "./footer.css"
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white altura p-3">
      <div className="row">
        <div><img src={Logo} width="120" alt="" /></div>
      </div>

      <div className="row">
        <div className="col invisible">hola</div>
        <div className="col">
        <Link to='/user'>
                   <Nav> 
                   <p className='text-white'>Mi perfil</p>
                   </Nav>
        </Link>
        <Link to='/wallet'>
                   <Nav> 
                   <p className='text-white'>Mi billetera</p>
                   </Nav>
        </Link>
          
        </div>
        <div className="col">
          Nuestro equipo
        </div>
      </div>

      <div className="row text-center text-white mt-5"><p className='color-copy'>Copyright © 2022. Todos los derechos reservados.</p></div>
    </div>
  )
}

export default Footer