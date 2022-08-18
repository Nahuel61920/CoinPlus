import React from 'react'
import Header from "../Sections/Header/Header"
import Services from "../Sections/Services/Services"
import Tobepart from "../Sections/ToBePart/tobepart"

function Main() {
  return (
    <div className="container-xl">
      <Header/>
      <Services/>
      <Tobepart/>
    </div>
  )
}

export default Main