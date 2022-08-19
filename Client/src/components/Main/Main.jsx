import React from 'react'
import Header from "../Sections/Header/Header"
import Services from "../Sections/Services/Services"
import Promo from "../Sections/Promo/Promo"
import Tobepart from "../Sections/ToBePart/ToBePart"

function Main() {
  return (
    <div className="container-xl">
      <Header/>
      <Services/>
      <Promo/>
      <Tobepart/>
    </div>
  )
}

export default Main