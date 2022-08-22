import React from 'react'
import Logo from '../../assets/img/coin+Blan.png'

function Footer() {
  return (
    <div className="container-fluid bg-dark text-light d-inline-flex flex-lg-row flex-column px-md-5 px-1">
      <div className='section1 p-2 '>
        <img src={Logo} width="120" alt="" />
        <p>Acércate al mundo cripto.</p>
        <p>La forma más simple y segura de comerciar criptomonedas.</p>
        <p>Encuntra las mejores ofertas del mercado</p>
      </div>
      <div className='section2 p-2'>
        <h3>Funcionalidades</h3>
        <p>Analiza cómo funcionan y qué mueve el mercado.</p>
        <p>Comprar criptomonedas y otros activos digitales.</p>
        <p>Vende tus criptomonedas de manera rapida y segura.</p>
      </div>
      <div className='section3 p-2'>
        <h3>Quienes Somos</h3>
        <p>La forma más simple y segura de comerciar criptomonedas.</p>
        <p>Tu mejor aliado a la hora de operar con activos digitales.</p>
        <p>Más que un banco digital, somos una familia.</p>
      </div>
    </div>
  )
}

export default Footer