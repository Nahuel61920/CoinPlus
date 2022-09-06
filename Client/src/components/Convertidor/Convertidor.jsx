import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto,modifyTransaction } from "../../redux/reducers/cryptoRed";
import { getCryptoPrice } from "../../redux/reducers/cryptoRed";

export default function Convertidor() {
  const dispatch = useDispatch();

  const { cryptos, cryptoPrice, usuarios, transactions } = useSelector(
    (state) => state.crypto
  );

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  


  // useEffect(() => {
  //   dispatch(modifyTransaction(currentTranferData));
  //   console.log("---->")
  // }, [dispatch]);

  // Constantes de conversión

  const factorExchange = 0.0035;
  const numberOfDecimals = 5

  const ethereumEcosystem = cryptos?.filter(e=> e.tag_names.includes("ethereum-ecosystem")).sort((a, b) => (a.price < b.price ? 1 : -1))

  //Getting and modifying transactions

  // const [currentTranferData, setCurrentTranferData] = useState(
  //   {
  //     amountToSend: 0,
  //     amountToReceive: 0,
  //     KindOfOperation: true,
  //     cryptoSelected: 0,
  //     rateExchange: 0,
  //     symbol: "",
  //   }
  // );

  function handleChange(e) {

    const dataUpdated ={
      metamaskAccount:"",
      cryptoSelected: cryptoPrice[0].name,
      symbol: cryptoPrice[0].symbol,
      kindOfOperation:currentKindOfExchange,
      rateExchange: currentKindOfExchange
        ?Math.round(cryptoPrice[0].price* (1 - factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals)
        :Math.round(cryptoPrice[0].price* (1 + factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals),
      [e.target.name==="amountToSend"?"amountToSend":"amountToReceive"]:Number(e.target.value),
      [e.target.name==="amountToSend"?"amountToReceive":"amountToSend"]:e.target.name==="amountToSend"
      ?e.target.value*Math.round(cryptoPrice[0].price* (1 - factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals)
      :e.target.value*Math.round(cryptoPrice[0].price/ (1 - factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals),
    }

    dispatch(modifyTransaction(dataUpdated));
    console.log("------>")
    console.log(transactions)
  }



  //Set the current crypto name
  const [currentCrypto, setCurrentCrypto] = useState("");
  const [currentTrade, setCurrentTrade] = useState({
    dolar: "",
    crypto: "",
  });

  const [currentKindOfExchange, setCurrentKindOfExchange] = useState(true);

  function convert(inCoin, amount) {
    if (inCoin === "dolar") {
      return (Math.round((amount / cryptoPrice[0].price)*Math.pow(10,numberOfDecimals)))/Math.pow(10,numberOfDecimals);
    } else {
      return (Math.round((amount * cryptoPrice[0].price)*Math.pow(10,2)))/Math.pow(10,2);
    }
  }
  
  function handleCryptoName(e) {
    dispatch(getCryptoPrice(e.target.value));
    console.log(e);
    setCurrentCrypto(e.target.value);
  }

  function handleExchange(e) {
    setCurrentTrade({
      // [e.target.name!=="dolar"?"crypto":"dolar"] : e.target.value,
      [e.target.name === "dolar" ? "crypto" : "dolar"]:
        e.target.name === "dolar"
          ? convert("dolar", e.target.value)
          : convert("", e.target.value),
    });
  }

  function handleUpdate(e) {
    setCurrentTrade({
      dolar: currentTrade.dolar,
      crypto: convert("dolar", currentTrade.dolar),
    });
  }

  function handleKindOfExchange() {
    currentKindOfExchange?setCurrentKindOfExchange(false):setCurrentKindOfExchange(true)
  }



  return (
    <div className="col-5">
      <div className="">
        <div className="card-1 ">
          <div className="card-body">
            <h1 className="card-title text-center mb-2">{`Bienvenido ${usuarios.name?usuarios.name:"a Coin+"}`}</h1>
            <h5 className="text-center border-bottom">Tipo de cambio hoy</h5>
            <div className="d-flex justify-content-center">
              <select
                defaultValue="Category"
                className="name-filt col-5  m-3 "
                onChange={(e) => {
                  handleCryptoName(e);
                  handleUpdate(e);
                }}
              >
                <option className="text-center" value="All">
                  Seleccione su Criptomoneda
                </option>
                {ethereumEcosystem.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="container border-bottom">
             
            <div className="row">
              <div className="col">
                <h6 className="text-center">Compra</h6>
                {cryptoPrice.length > 0 ? (
                  <p className="text-center">
                    {"$" + Math.round(cryptoPrice[0].price* (1 - factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals)}
                  </p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="col">
                <h6 className="text-center">Venta</h6>
                {cryptoPrice.length > 0 ? (
                  <p className="text-center">{"$" + Math.round(cryptoPrice[0].price* (1 + factorExchange)*Math.pow(10,numberOfDecimals))/Math.pow(10,numberOfDecimals)}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
            </div>

            </div>
            <div claessName="container">
              <div className="container">
                  {currentKindOfExchange&&
                (<div className="row">
                  <h6 className="text-center">Enviar Dólares</h6>
                  <div className="container d-flex justify-content-center">
                    <p>$</p>
                    <input
                      type="text"
                      name= {currentKindOfExchange?"amountToSend":"amountToReceive"}
                      className="col-5 m-3  rounded-1"
                      placeholder="Ingrese monto a convertir..."
                      onChange={handleChange}
                      // value={currentTrade.dolar}
                    ></input>
                  </div>
                </div>
                )}

                {currentKindOfExchange&&(
                <div className="container d-flex justify-content-center mb-3 mt-3">
                  <div className="row">
                  <button type="button" class="btn btn-dark" onClick={handleKindOfExchange}>REVERSA</button>
                  </div>
                </div>
                )}

                <div className="row">
                  <h6 className="text-center">{currentKindOfExchange?"Recibe":"Enviar"} Criptomonedas </h6>   
                  <div className="container d-flex justify-content-center">
                    <span>
                      {cryptoPrice.length > 0 ? (
                        <p>{cryptoPrice[0].symbol}</p>
                      ) : (
                        <p>$</p>
                      )}
                    </span>
                    <input
                      type="text"
                      name={currentKindOfExchange?"amountToReceive":"amountToSend"}
                      // value={currentTrade.crypto}
                      className="col-5 m-3 rounded-1"
                      placeholder={currentKindOfExchange?"":"Ingrese monto a convertir..."}
                      onChange={handleChange}
                    ></input>
                  </div>

                  {!currentKindOfExchange&&(
                <div className="container d-flex justify-content-center mb-3 mt-3">
                  <div className="row">
                  <button  type="button" class="btn btn-dark"  onClick={handleKindOfExchange}>REVERSA</button>
                  </div>
                </div>
                )}


                  {!currentKindOfExchange&&
                (<div className="row">
                  <h6 className="text-center">Recibe Dólares</h6>
                  <div className="container d-flex justify-content-center">
                    <p>$</p>
                    <input
                      type="text"
                      name={currentKindOfExchange?"amountToSend":"amountToReceive"}
                      className="col-5 m-3 rounded-1"
                      placeholder=""
                      onChange={handleChange}
                      // value={currentTrade.dolar}
                    ></input>
                  </div>
                </div>
                )}
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}