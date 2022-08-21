import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './User.css'
import Logo from '../../assets/img/coin+logo.png'
import NavBar from '../../components/boostrap/navbar'
import UserCard from '../../components/boostrap/card1'
import Wallet from '../../components/boostrap/walletmini'

function User() {
  const {user, isAuthenticated} = useAuth0()
  // console.log(user)
  return (
    <div>
      <NavBar logo={Logo} />
    <div className='container-fluid d-flex justify-content-between p-5 '>
      <UserCard user={user} />
      <Wallet/>
    </div>
    </div>
 )
}

export default User