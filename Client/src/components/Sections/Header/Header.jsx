import React from 'react'
import HeaderImg from "../../../assets/svg/headerimg.svg"
import "./header.css"

function Header() {
  return (
    <div className="row aling-content-center justify-items-center d-flex flex-md-row flex-column">
      <div className="col-12 col-md-6 aling-items-center m-auto my-5">
        <h4 className="fs-4">Lorem Ipsum is simply dummy.</h4>
        <h1 className="title__text fw-bold my-4">Lorem Ipsum is simply dummy.</h1>
        <p className="fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="btn btn-primary">boton</button>
      </div>
      <div className="col-12 col-md-6 m-auto container__img_header my-5">
        <img src={HeaderImg} alt="header"/>
      </div>
    </div>
  )
}

export default Header