import React, { useState } from "react";
import "./loginbtn.css";
import { Link } from "react-router-dom";

export default function LoginDetailBtn() {
  

  return (
    <Link to="/user" style={{ textDecoration: "none" }}>
      <button className="buttonLogin">
        Perfil
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
    </Link>
  );
}
