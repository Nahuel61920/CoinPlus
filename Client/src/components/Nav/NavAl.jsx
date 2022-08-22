import React from 'react'
import Logo from '../../assets/img/coin+logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './nav.css' ;


import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Login/LoginButton';
import ImgProfile from '../Profile/ImgProfile';
import { Cryptoname, nameCrypto } from '../../redux/reducers/cryptoRed';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function NavAl() {

  const {isAuthenticated} = useAuth0()
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    dispatch(nameCrypto(name));
    setName('');
    
  };

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-warning px-md-5 px-1 sticky-top">
        <div class="container-fluid w-100">
          <NavLink to ="/">
          <img src={Logo} alt="C+" width="150"/>
          </NavLink>
          <div>
          <div class="container-fluid">
<form class="d-flex " role="search">
  <input class="form-control me-2 hight" type="search" placeholder="Search..." aria-label="Search" value={name} onChange={(e) => setName(e.target.value)}/>
  <button class="buttonLogin" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
</form>
</div>
         </div>
            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav navbar-nav ms-auto mx-3"/>
                <ImgProfile/>
                </div>
        </div>
    </nav>
  )
  function handleSubmit(e){
    e.preventDefault();
      dispatch(Cryptoname(name));
  
  };
  
}


export default NavAl