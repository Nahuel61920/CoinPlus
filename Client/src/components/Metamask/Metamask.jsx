import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../assets/img/coin+logo.png";
import UserCard from "../../components/ProfileCard/ProfileCard";
// import Wallet from "../../components/boostrap/walletmini";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import  axios  from "axios";


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

 function  Metamask  () {
  const { user, isAuthenticated } = useAuth0();
  const [compra, setCompra] = useState("");
  const navigate = useNavigate()
  const [url, setUrl]=useState("")

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

 
  async function handleCobrar (e, compra){
    const dolariki=compra
    const pay=  await axios.post(`/create-order?dolariki=${dolariki}`)
                    .then((res)=> {return res.data.links[1].href})
                    .then((res)=> setUrl(res))
  }
   
 
  
  return (
    <div className="container-fluid ">

       {/* Aca comienza PAYPAL*/}
        <div>
          <div>
            <p>Ingresa aqui los dolares a pagar:</p>
            <input
              type="text"
              name="crypto"
              value={compra}
              className="col-5 m-3 animateanimated animatebounceInLeft animate__delay-1s"
              onChange={(e) => setCompra(e.target.value)}
            />
        </div>
          <button onClick={(e)=>handleCobrar(e, compra)} >Hacer pedido</button>
            {
              url.length ?

              
              (<a href={url} target="_blank">
                <button >pagar</button>
              </a>):(<h1></h1>)

               
            }
          
         
          
        </div>

        {/* Aca comienza METAMASK*/}
        <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-center animate__animated animate__backInRight animate__delay-1s">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="d-flex flex-row justify-content-center align-items-center bg-primary p-2"
            >
              <AiFillPlayCircle className="text-white me-2" />
              <div>
                <p className="text-white text-center m-auto">Connect Wallet</p>
              </div>
            </button>
          )}
          </div>

      <div className="container">
      {/* <Wallet/> */}

      <div className="d-flex flex-column flex-1 justify-items-center justify-content-start">
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
              <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>
        <div className="bg-envio p-5 sm:w-96 w-full d-flex flex-column justify-items-start justify-items-center">
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
            <h1 className="text-white">Sending crypto</h1>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="btn-envio w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span> Send now
            </button>
          )}
        </div>


      </div>
      </div>
    </div>
  );
}

export default Metamask;
