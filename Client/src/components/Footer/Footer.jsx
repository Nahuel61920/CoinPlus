import React from 'react'
import Logo from '../../assets/img/coin+Blan.png'
import "./footer.css"

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white altura p-3">
      <div className="row">
        <div><img src={Logo} width="120" alt="" /></div>
      </div>

      <div className="row">
        <div className="col invisible">hola</div>
        <div className="col">
          <p className='text-white'>Mi perfil</p>
          <p className='text-white'>Mi billetera</p>
        </div>
        <div className="col">
          Nuestro equipo
        </div>
      </div>

      <div className="row text-center text-white mt-5"><p className='color-copy'>Copyright © 2022. All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer