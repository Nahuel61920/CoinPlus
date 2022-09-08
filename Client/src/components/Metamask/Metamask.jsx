import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Footer from "../Footer/Footer";
import { FormattedMessage } from "react-intl";

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

function Metamask() {
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

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-evenly p-3 "
      >
        <div style={{ width: "35rem" }} className="text-center ">
          <h2 className="border-bottom border-dark mb-5">
            <FormattedMessage
              id='Metamask-conect'
              defaultMessage='Connect your wallet to Metamask'
            />
          </h2>
          <p>
            <FormattedMessage
              id='Metamask-par-1'
              defaultMessage='MetaMask is a browser extension that serves as an Ethereum wallet. Once installed, it allows users to store Ether, allowing them to transact to any Ethereum address. It also allows access to other selected blockchains. and compatible.'
            />
          </p>

          <p><FormattedMessage
            id='Metamask-par-2'
            defaultMessage='Connect it in 2 simple steps:'
          /></p>
          <p>
            <FormattedMessage
              id='Metamask-par-3'
              defaultMessage='1. Download and install the Google Chrome extension or Firefox addon, depending on your browser.'
            />
          </p>
          <p><FormattedMessage
            id='Metamask-par-4'
            defaultMessage="2. Create your account if you don't have one and that's it!"
          /></p>

          <p><FormattedMessage
            id='Metamask-par-5'
            defaultMessage='Important: MetaMask will complete your 12-word backup phrase for you. This will be necessary to recover your wallet if you ever forget your password or lose access to your computer, and you should store it somewhere safe .'
          />
          </p>
        </div>

        {/* Boton antes de conectar*/}
        <div className="d-flex flex-column">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="d-flex flex-row justify-content-center align-items-center bg-primary p-2"
            >
              <AiFillPlayCircle className="text-white me-2" />
              <div>
                <p className="text-white text-center m-auto">
                  <FormattedMessage
                    id='Metamask-btn-conect'
                    defaultMessage='Connect your wallet'
                  />
                </p>
              </div>
            </button>
          )}

          {/* <Wallet/> */}

          <div
            style={{ width: "30em" }}
            className="my-3 card-tarj p-3 d-flex justify-items-start flex-column rounded-xl h-40 sm:w-72 col-5"
          >
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
          <div
            style={{ width: "30em" }}
            className="bg-envio p-5 sm:w-96 w-full d-flex flex-column justify-items-start justify-items-center col-5"
          >
            <p className="text-center m-auto">
              <FormattedMessage
                id='envia-cry'
                defaultMessage='Send crypto to a friend'
              />
            </p>
            <Input
              placeholder="Direction"
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
              placeholder="Key (GIF)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter a message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <h1 className="text-white"><FormattedMessage
                id='Enviar-cry'
                defaultMessage='Sending cryptocurrency'
              /></h1>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-envio w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span> <FormattedMessage
                  id='Enviar'
                  defaultMessage='Send'
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Metamask;
