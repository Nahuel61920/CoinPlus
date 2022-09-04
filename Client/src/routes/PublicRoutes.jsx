import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../page/LandingPage/LandingPage.jsx'
import Equipo from '../components/Equipo/Equipo.jsx'

function PublicRoutes() {
  return (
    <Routes>
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/" element={<LandingPage />} />
        
    </Routes>
  )
}

export default PublicRoutes