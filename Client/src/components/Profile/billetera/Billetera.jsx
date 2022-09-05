import React from 'react'
import NavBar from '../../Nav/NavProfile'
import Metamask from '../../Metamask/Metamask'
import Convertidor from '../../Convertidor/Convertidor'
import OperationDetail from '../../Convertidor/OperationDetail'
import "./billetera.css";

function Billetera() {
  return (
    <div className="bg-global">
        <NavBar/>
        <div className="row my-4">
          <Convertidor className="col-6"/>
          <OperationDetail className="col-6"/>
        </div>
        <Metamask/> 
    </div>
  )
}

export default Billetera