import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "../../redux/reducers/cryptoRed";
import { getCryptoPrice } from "../../redux/reducers/cryptoRed";

export default function Convertidor() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  const { cryptos, cryptoPrice, usuarios } = useSelector(
    (state) => state.crypto
  );

  //Set the current crypto name
  const [currentCrypto, setCurrentCrypto] = useState("");
  const [currentTrade, setCurrentTrade] = useState({
    dolar: "",
    crypto: "",
  });

  function convert(inCoin, amount) {
    if (inCoin === "dolar") {
      return amount / cryptoPrice[0].price;
    } else {
      return amount * cryptoPrice[0].price;
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

  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center mt-3 mb-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">{`Bienvenido ${usuarios.name}`}</h1>
            <div className="d-flex justify-content-center">
              <select
                defaultValue="Category"
                className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
                onChange={(e) => {
                  handleCryptoName(e);
                  handleUpdate(e);
                }}
              >
                <option className="text-center" value="All">
                  Escoja su Criptomoneda
                </option>
                {cryptos.map((c) => (
                  <option value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="container">
              <h5 className="text-center border-bottom">Tipo de cambio hoy</h5>
            <div className="row">
              <div className="col">
                <h6 className="text-center">Compra</h6>
                {cryptoPrice.length > 0 ? (
                  <p className="text-center">
                    {"$" + Math.round(cryptoPrice[0].price, 4) * (1 - 0.007)}
                  </p>
                ) : (
                  <p>-</p>
                )}
              </div>
              <div className="col">
                <h6 className="text-center">Venta</h6>
                {cryptoPrice.length > 0 ? (
                  <p className="text-center">{"$" + Math.round(cryptoPrice[0].price, 4) * 1.007}</p>
                ) : (
                  <p>-</p>
                )}
              </div>
            </div>

            </div>
            <div className="container border">
              <div className="row">
                <div className="row">
                  <h6>Enviar Dolares</h6>
                  <div className="container d-flex">
                    <span>$</span>
                    <input
                      type="text"
                      name="dolar"
                      className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s rounded-1"
                      placeholder="Ingrese monto a convertir..."
                      onChange={handleExchange}
                      value={currentTrade.dolar}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <h6>Recibe Crypto</h6>
                  <div className="container d-flex">
                    <span>
                      {cryptoPrice.length > 0 ? (
                        <p>{cryptoPrice[0].symbol}</p>
                      ) : (
                        <p></p>
                      )}
                    </span>
                    <input
                      type="text"
                      name="crypto"
                      value={currentTrade.crypto}
                      className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s rounded-1"
                      onChange={handleExchange}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <select
        defaultValue="Category"
        className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
        onChange={(e) => {handleCryptoName(e);handleUpdate(e)}}
        
      >
        <option value="All">Escoja su Criptomoneda</option>
        {cryptos.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
        <input type="text" value={cryptoPrice.length ? cryptoPrice[0].price.toString().slice(0,8) : 0} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" />
      <div>
      <p>Valor en Dólares</p>
        <p>$</p><input type="text" name="dolar"  className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s"
          placeholder="Ingrese monto a convertir..." onChange = {handleExchange} value={currentTrade.dolar}>
        </input> 
      </div> 
      <div>
        <p>Valor en Criptomonedas</p>
        <p>(Ξ)</p><input type="text" name="crypto" value={currentTrade.crypto} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" 
          onChange = {handleExchange}>
        </input> 
      </div>   */}
    </div>
  );
}