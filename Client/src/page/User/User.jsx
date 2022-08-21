import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './User.css'

import NavAl from "../../components/Nav/NavAl"

function User() {
  const {user} = useAuth0()
  
  return (
  <div>
    <NavAl/>

    <div class="conprin">
    <div class="card">
      <div class="card-border-top">
        <div class="img">
        <img class="imgprofile" src={user.picture} alt={user.name}/>
        </div>
        <span> {user.name}</span>
        <p class="job">{user.email}</p>
        <p class="job">idioma: {user.locale}</p>
        <p class="job">Logueado con: {user.sub.slice(0,6)}</p>
        <p class="job">Fecha: {user.updated_at.slice(0,10)}</p>
  <div class="conbot">
    <button> Favoritos </button> 
    <button> Actividad </button>
  </div>  
      </div>
    </div>
    </div>

  </div>  
  )
}

export default User