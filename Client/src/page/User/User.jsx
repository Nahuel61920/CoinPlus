import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./User.css";
import Logo from "../../assets/img/coin+logo.png";
import NavBar from "../../components/boostrap/navbar";
import UserCard from "../../components/boostrap/card1";
// import Wallet from "../../components/boostrap/walletmini";

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Transactions from "./Transactions";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

function User() {
  const { user, isAuthenticated } = useAuth0();

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  // console.log(user)
  return (
    <div>
      <NavBar logo={Logo} />
      <div className="container-fluid d-flex justify-content-between p-5 ">
        <UserCard user={user} />
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}
        {/* <Wallet/> */}
        <div className="col-5 d-flex flex-column flex-1 justify-items-center justify-content-start">
          <div className="my-3 card-tarj p-3 d-flex justify-items-start flex-column rounded-xl h-40 sm:w-72">
            <div className="d-flex justify-between flex-column w-full h-full">
              <div className="d-flex justify-content-between justify-items-start">
                <div className="p-2 rounded-full rounded-circle border border-2 border-white d-flex justify-content-center justify-items-center">
                  <SiEthereum fontSize={30} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div className="pt-5">
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black p-5 sm:w-96 w-full d-flex flex-column justify-items-start justify-items-center">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <h1>Estamos trabajando para arreglarlo</h1>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-black w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
      <Transactions />
    </div>
  );
}

export default User;
