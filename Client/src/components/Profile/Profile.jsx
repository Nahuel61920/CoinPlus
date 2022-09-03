import React, {useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from '../BtnsLogin/LogOut';
import LoginDetailBtn from '../BtnsLogin/LoginDetailBtn.jsx';
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, createUser } from '../../redux/reducers/cryptoRed';

export default function Profile() {
  const { user,isLoading, isAuthenticated } = useAuth0();
  const { usuarios } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  if(isLoading){return <div>Loading ...</div>;}

  function HandleCreate(e) {

    let crear = {
      name: user.given_name,
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
      source: user.sub.toString(),
    };
    dispatch(getUser(user.email));

    dispatch(createUser(crear));
    console.log(usuarios);
  }

  return (
    isAuthenticated && (
        <div className="profile-nav dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => HandleCreate(e)}>
                <img className="img-profile-nav" src={usuarios.picture||user.picture} alt={user.nickname}/>
          </a>
          <ul class="dropdown-menu text-center p-0 justify-content-center ">
            <div className='modal_drop'>
                <div className='img-desp'>
                <img className="img-profile-nav-desp" src={usuarios.picture} alt={user.nickname}/>
                </div>
                <h6>{usuarios.nickname}</h6>
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