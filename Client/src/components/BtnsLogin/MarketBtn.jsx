import React from "react";
import "./loginbtn.css";
import { Link } from "react-router-dom";

export default function MarketBtn() {
  return (
    <Link to="/market" style={{ textDecoration: "none" }}>
      <button className="buttonLogin">
        Mercado
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
    </Link>
  );
}
