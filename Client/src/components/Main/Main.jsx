import React from 'react'
import Header from "../Sections/Header/Header"
import Services from "../Sections/Services/Services"
import Promo from "../Sections/Promo/Promo"
import Tobepart from "../Sections/ToBePart/ToBePart"
import Notifications from "../Sections/Notifications/Notifications"

function Main() {
  return (
    <div className="container-xl">
      <Header/>
      <Services/>
      <Promo/>
      <Notifications/>
      <Tobepart/>
    </div>
  )
}

export default Main