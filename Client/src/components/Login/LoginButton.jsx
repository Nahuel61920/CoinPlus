import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import {FaUserAltSlash} from 'react-icons/fa';
import "./loginbtn.css"


export default function LoginButton() {

    const { loginWithRedirect } = useAuth0()

  return (
    <>
    <button onClick={() => loginWithRedirect()} className="buttonLogin buttonLogSin">
      Login/SignUp
      <div class="arrow-wrapper">
          <div class="arrow"></div>
      </div>
    </button>
    <div onClick={() => loginWithRedirect()} className="buttonLoginMq">
      <FaUserAltSlash className="iconLogin"/>
    </div>
    </>
  )
}
