import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './User.css'

function User() {
  const {user, isAuthenticated} = useAuth0()
  console.log(user)
  return (
    <div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  <img class="imgprofile" src={user.picture} alt={user.name}/>
  </div>
  <span> {user.name}</span>
  <p class="job">{user.email}</p>
  <p class="job">idioma: {user.locale}</p>
  <p class="job">Logueado con:  {user.sub.slice(0,6)}</p>
  <p class="job">Fecha:  {user.updated_at.slice(0,10)}</p>
  <button> Favoritos</button> 
  <button> Actividad</button>
   </div>
//     <div>
//     <img src={user.picture} alt={user.name}/>
//     <h2>{user.name}</h2>
//     <p>{user.email}</p>   
// </div>
  )
}

export default User