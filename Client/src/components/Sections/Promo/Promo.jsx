import React from 'react'
import "./promo.css"
import coinIcon from "../../../assets/img/coinIcon.png"

export default function Promo() {
  return (
    <div id='About'>

        <h1 className="fw-bold text-center">About</h1>
        
        <div class="row card-promo my-5" >
            <div className="col-12 col-md-6 aling-content-center mt-5">
            <h4 className="fs-4 mt-5">Quienes Somos</h4>
            <p className="fs-4">La forma más simple y segura de comerciar criptomonedas.</p>
            </div>
      <div className="col-12 col-md-6 my-5 container__img_header">
        <img src={coinIcon} alt="coinIcon"/>
      </div>    
               
        </div>
</div>


  )
}
