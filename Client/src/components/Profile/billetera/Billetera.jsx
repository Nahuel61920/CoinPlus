import React from 'react'
import NavBar from '../../Nav/NavProfile'
// import Metamask from '../../Metamask/Metamask'
import Convertidor from '../../stepper/Convertidor/Convertidor'
import OperationDetail from '../../stepper/OperationDetail/OperationDetail'

function Billetera() {
  return (
    <div>
        <NavBar/>
        <Convertidor/>
        <OperationDetail></OperationDetail>
        {/* <Metamask/> */}
    </div>
  )
}

export default Billetera