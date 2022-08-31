import React from "react";
import { Route, Routes } from "react-router-dom";
import Market from "../page/Market/Market.jsx";
import User from "../page/User/User.jsx";
import CryptoDetail from "../page/CryptosDetail/CryptoDetail";
import Pagado from "../components/Pagado/Pagado.jsx";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/market" element={<Market />} />
      <Route path="/user" element={<User />} />
      <Route path="/market/:id" element={<CryptoDetail />} />
    </Routes>
  );
}

export default PrivateRoutes;
