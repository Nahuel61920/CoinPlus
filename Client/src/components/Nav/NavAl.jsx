import React from "react";
import Logo from "../../assets/img/coin+logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

import ImgProfile from "../Profile/ImgProfile";
import { fetchCrypto, nameCrypto } from "../../redux/reducers/cryptoRed";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function NavAl({setCurrentPage}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  function handleSubmit(e) {
    dispatch(nameCrypto(e));
    setCurrentPage(1);
    navigate("/market");
  }

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-warning px-md-5 px-1 sticky-top">
      <div class="container-fluid w-100 ">
        <NavLink to="/">
          <img src={Logo} alt="C+" className="img-nav-all" />
        </NavLink>
        <div>
          <div class="container-fluid">
              <input
                class="form-control me-2 hight"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  handleSubmit(e.target.value);
                }}
              />
          </div>
        </div>
        <button
          class="navbar-toggler btn-navAll p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span class="navbar-toggler-icon fs-6"></span>
        </button>
        <div className="nav-All"><ImgProfile />  </div>      
        
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="nav navbar-nav ms-auto mx-3" />
          <NavLink
            to="/market"
            style={{ textDecoration: "none" }}
            className="px-4 fw-bold text-primary"
          >
            Market
          </NavLink>
        </div>
        <div className="nav-All-2"><ImgProfile />  </div> 
      </div>
    </nav>
  );
}

export default NavAl;
