import React from "react";
import NavBar from "../../Nav/NavProfile";
import Metamask from "../../Metamask/Metamask";
import "./billetera.css";

function Billetera() {
  return (
    <div className="bg-global">
      <NavBar />
      <Metamask />
    </div>
  );
}

export default Billetera;
