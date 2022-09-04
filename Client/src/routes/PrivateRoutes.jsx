import React from "react";
import { Route, Routes } from "react-router-dom";
import Market from "../page/Market/Market.jsx";
import User from "../page/User/User.jsx";
import CryptoDetail from "../page/CryptosDetail/CryptoDetail";
import Pagado from "../components/Pagado/Pagado.jsx";
import Billetera from '../components/Profile/billetera/Billetera'
import Stepper from "../components/Convertidor/Stepper.jsx";
import Transactions from "../page/User/Transactions.jsx";
import Equipo from "../components/Equipo/Equipo.jsx";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/market" element={<Market />} />
      <Route path="/user" element={<User />} />
      <Route path="/market/:id" element={<CryptoDetail />} />
      <Route path="/wallet" element={<Billetera />} />
      <Route path="/operation" element={<Stepper />} />
      <Route path="/movements" element={<Transactions />} />
      <Route path="/equipo" element={<Equipo />} />
    </Routes>
  );
}

export default PrivateRoutes;
