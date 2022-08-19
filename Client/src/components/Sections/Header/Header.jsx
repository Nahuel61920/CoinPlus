import React from 'react'
import HeaderImg from "../../../assets/svg/headerimg.svg"
import "./header.css"

function Header() {
  return (
    <div id="Home" className="row aling-content-center justify-content-center d-flex flex-md-row flex-column min-vh-100">
      <div className="col-12 col-md-6 aling-content-center mt-5" data-aos="fade-right" data-aos-delay="300">
        <h4 className="fs-4 mt-5">Tu ruta hacia el futuro.</h4>
        <h1 className="title__text fw-bold my-4">Acércate al mundo cripto.</h1>
        <p className="fs-4">La forma más simple y segura de comerciar criptomonedas.</p>
        <button className="btn btn-primary">Ingresa</button>
      </div>
      <div className="col-12 col-md-6 my-5 container__img_header" data-aos="fade-left" data-aos-delay="650">
        <img src={HeaderImg} alt="header"/>
      </div>
    </div>
  )
}

export default Header