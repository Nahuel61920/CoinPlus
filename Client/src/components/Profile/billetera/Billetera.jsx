import React from 'react'
import NavBar from '../../Nav/NavProfile'
import Metamask from '../../Metamask/Metamask'
import Convertidor from '../../Convertidor/Convertidor'

function Billetera() {
  return (
    <div>
        <NavBar/>
        <Convertidor></Convertidor>
        <Metamask/>
    </div>
  )
}

export default Billetera