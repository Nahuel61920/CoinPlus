import React from 'react'
import Header from "../Sections/Header/Header"
import Services from "../Sections/Services/Services"
import Promo from "../Sections/Promo/Promo"

function Main() {
  return (
    <div className="container-xl">
      <Header/>
      <Services/>
      <Promo/>
    </div>
  )
}

export default Main