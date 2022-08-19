import React, { Fragment } from 'react'
import Nav from "../../components/Nav/Nav"
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer"
import ScrollTop from "../../components/ScrollTop/ScrollTop"
import Profile from '../../components/Profile/Profile'

function LandingPage() {
  return (
    <>
      <Nav/>
      <ScrollTop/>
      <Profile/>
      <Main/>
      <Footer/>
    </>
  )
}

export default LandingPage