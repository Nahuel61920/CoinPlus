import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from '../Login/LogOut';
import LoginDetailBtn from '../Login/LoginDetailBtn.jsx';
import './profile.css';



export default function Profile() {
    const {user, isAuthenticated} = useAuth0()
  return (
    isAuthenticated && (
        <div className="profile-nav dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="img-profile-nav" src={user.picture} alt={user.nickname}/>
          </a>
          <ul class="dropdown-menu text-center p-0 justify-content-center ">
            <div className='modal_drop'>
                <div className='img-desp'>
                <img className="img-profile-nav-desp" src={user.picture} alt={user.nickname}/>
                </div>
                <h6>{user.nickname}</h6>
                <p className='email'>{user.email}</p>
            </div>
            <div className='justify-content-center d-flex m-2 gap-2 btns-profile'>
                <LogOut/>
                <LoginDetailBtn/>
            </div>

          </ul>
        </div>
    )
  )
}