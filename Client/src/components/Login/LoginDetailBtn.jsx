import React, {useState} from 'react'
import './loginbtn.css'
import { Link } from 'react-router-dom'
import { createUser } from "../../redux/reducers/cryptoRed";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginDetailBtn() {

  const { user} = useAuth0();

  const dispatch= useDispatch()
  const {users}= useSelector((state)=> state.crypto)

  const [input, setInput]= useState({
    name: "",
    email: "",
    nickname: "",
    picture: "",
    source: "",
  })
  
  function HandleCreate(input){
    
    setInput({
    name: user.given_name,
    email: user.email,
    nickname: user.nickname,
    picture: user.picture,
    source: user.sub.toString(),
    })
  
    console.log("input--->",input)
    dispatch(createUser(input))
    
  }
  
  return (
    <Link to="/user" style={{ textDecoration: 'none' }}>
        <button className="buttonLogin" onClick={HandleCreate(input)}>
        Perfil
        <div class="arrow-wrapper">
            <div class="arrow"></div>
        </div>
        </button>
    </Link>
  )
}