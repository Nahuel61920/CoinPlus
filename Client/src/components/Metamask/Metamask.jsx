import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Footer from "../Footer/Footer";

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
        style={{ height: "100vh" }}
        className="container-fluid d-flex justify-content-evenly p-3 "
      >
        <div style={{ width: "35rem" }}>
          <h2 className="border-bottom border-dark mb-5">
            Conecte su billetera a Metamask
          </h2>
          <p>
            MetaMask es una extensión para el navegador que sirve como wallet de
            Ethereum. Una vez instalado, permite a los usuarios almacenar Ether,
            permitiéndoles realizar transacciones a cualquier dirección de
            Ethereum. También permite acceder a otras blockchain seleccionadas y
            compatibles.{" "}
          </p>

          <p>Conéctala en 2 simples pasos:</p>
          <p>
            1. Descarga e instala la extensión de Google Chrome o el addon de
            Firefox, dependiendo de tu navegador.
          </p>
          <p>2. Crea tu cuenta si no tienes una y listo!</p>

          <p>
            Importante: MetaMask te presentará tu frase de respaldo de 12
            palabras. Esto será necesario para recuperar tu wallet si alguna vez
            olvidas tu contraseña o pierdes el acceso a tu computadora, y debes
            guardarlo en algún lugar seguro.
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
                  Conecte su billetera
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
            <p className="text-black text-center m-auto">
              Envia cripto a un amigo
            </p>
            <Input
              placeholder="Dirección"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Monto (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Clave (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Ingrese un mensaje"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <h1 className="text-white">Enviando crypto</h1>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-envio w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span> Enviar
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
