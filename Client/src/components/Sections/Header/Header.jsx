import React from 'react'
import HeaderImg from "../../../assets/svg/headerimg.svg"

function Header() {
  return (
    <div className="row aling-content-center justify-items-center">
      <div className="col justify-content-center border text-center aling-items-center">
        <div className="mt-5">
        <h3 className="fs-3 border">Subtitulo</h3>
        <h1 className="fs-1 border">titulo</h1>
        <p className="fs-4 border">lema</p>
        </div>
      </div>
      <div className="col justify-content-start border">
        <img src={HeaderImg} alt="header" />
      </div>
    </div>
  )
}

export default Header