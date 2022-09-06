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
        <Metamask/> 
    </div>
  )
}

export default Billetera