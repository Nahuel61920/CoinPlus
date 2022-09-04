import React from 'react'
import NavBar from '../../Nav/NavProfile'
import Metamask from '../../Metamask/Metamask'
import Convertidor from '../../Convertidor/Convertidor'
import OperationDetail from '../../Convertidor/OperationDetail'

function Billetera() {
  return (
    <div>
        <NavBar/>
        <Convertidor></Convertidor>
        <OperationDetail/>
        <Metamask/> 
    </div>
  )
}

export default Billetera