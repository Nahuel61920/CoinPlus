import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Market from '../page/Market/Market.jsx'
import User from '../page/User/User.jsx'

function PrivateRoutes() {
  return (
    <Routes>
        <Route path="/market" element={<Market />} />
        <Route path="/user" element={<User />} />
    </Routes>
  )
}

export default PrivateRoutes