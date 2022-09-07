import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";
import Logo from "../../assets/img/coin+logo.png";
import NavProfile from "../../components/Nav/NavProfile";
import UserCard from "../../components/ProfileCard/ProfileCard";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, createUser } from '../../redux/reducers/cryptoRed';
import Footer from '../../components/Footer/Footer'
// import Wallet from "../../components/boostrap/walletmini";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
// import { TransactionContext } from "../../context/TransactionContext";
// import { shortenAddress } from "../../utils/shortenAddress";
import Transactions from "./Transactions";

// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );

function User() {
  const { user } = useAuth0();
  const { usuarios } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  

    let crear = {
      name: user.name,
      email: user.email,
      nickname: user.nickname,
      picture: user.picture,
      source: user.sub.toString(),
      blocked: user.blocked,
    };
    useEffect(() => {
    dispatch(getUser(user.email));

    dispatch(createUser(crear));
    console.log(usuarios);
    }, [dispatch, user.email]);
    

  /* const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext); */

  /* const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  }; */

  
  return (
    <>
    <div style={{height:'100vh'}}>
        <div className="bg-global">
      {
        usuarios.blocked === true ? (
          null
        ) : (
          <NavProfile logo={Logo} />
        )
      }
      <div id="User" className="row justify-content-center p-2">
        <UserCard user={user} className="col-12" />
        

      </div>
    </div>
    </div>
  
    <Footer/>
    </>
  );
}

export default User;
