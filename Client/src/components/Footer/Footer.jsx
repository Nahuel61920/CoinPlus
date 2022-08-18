import React from 'react'
import Logo from '../../assets/img/coin+Blan.png'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light d-inline-flex flex-lg-row flex-column px-md-5 px-1">
      <div className='section1 p-2 '>
        <img src={Logo} width="120" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, harum!</p>
        <p>Lorem ipsum dolor sit amet </p>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className='section2 p-2'>
        <h3>Functionalities</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, harum!</p>
        <p>Lorem ipsum dolor sit amet </p>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className='section3 p-2'>
        <h3>About us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, harum!</p>
        <p>Lorem ipsum dolor sit amet </p>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
    </div>
  )
}

export default Footer