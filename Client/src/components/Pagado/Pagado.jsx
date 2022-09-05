import React from "react";
import { Link } from "react-router-dom";

import "./pagado.css"
import ipaypal from "../../assets/img/paypal.png"
import ipagcoinplus from "../../assets/img/pagcoinplus.png"

export default function Pagado() {
  return (
    <div className="container" >
      <div className="separador"></div>
      <h3 className="text-center">Su pago se ha realizado correctamente</h3>
      <div className="row justify-content-md-center">
        <div className="col col-lg-2"><img className="impag" src={ipaypal}/></div>
        <div className="col col-lg-2"><img className="impag" src={ipagcoinplus}/></div>
        
      
      </div>
      <h5 className="text-center">Su transacción y entrega de criptomoneda está siendo procesado</h5>

      <p className="text-center">En poco tiempo recibirá en su billetera el monto adquirido.</p>

      <div className="divbot">
    <Link to="/user">
      <button type="button" class="btn reg btn-warning">Regresar</button>
    </Link>
    </div>
      
    
    </div>
  )
}
