import React, { useState } from "react";
import "./loginbtn.css";
import { Link } from "react-router-dom";
import { createUser } from "../../redux/reducers/cryptoRed";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginDetailBtn() {
  const { user } = useAuth0();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.crypto);

  const [input, setInput] = useState({
    name: "",
    email: "",
    nickname: "",
    picture: "",
    source: "",
  });

  function HandleCreate(e) {
    let crear = {
      name: user.given_name,
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
      source: user.sub.toString(),
    };

    dispatch(createUser(crear));
  }

  return (
    <Link to="/user" style={{ textDecoration: "none" }}>
      <button className="buttonLogin" onClick={(e) => HandleCreate(e)}>
        Perfil
        <div class="arrow-wrapper">
          <div class="arrow"></div>
        </div>
      </button>
    </Link>
  );
}
