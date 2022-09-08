import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto, modifyTransaction } from "../../redux/reducers/cryptoRed";
import { getCryptoPrice } from "../../redux/reducers/cryptoRed";
import reverseLogo from "../../assets/img/reverse-logo.png";

export default function Convertidor() {
  const dispatch = useDispatch();

  const [currentKindOfExchange, setCurrentKindOfExchange] = useState(true);

  const { cryptos, cryptoPrice, usuarios, transactions } = useSelector(
    (state) => state.crypto
  );

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  function dataTransaction() {
    setCurrentCrypto(transactions.cryptoSelected);
    setCurrentTrade({
      amountToSend: transactions.amountToSend,
      amountToReceive: transactions.amountToReceive,
    });
    // setCurrentKindOfExchange(transactions.currentKindOfExchange)
  }

  useEffect(() => {
    dataTransaction();
  }, []);

  const factorExchange = 0.0035;
  const numberOfDecimals = 5;

  const ethereumEcosystem = cryptos
    ?.filter((e) => e.tag_names.includes("ethereum-ecosystem"))
    .sort((a, b) => (a.price < b.price ? 1 : -1));

  function handleChange(e) {
    const dataUpdated = {
      metamaskAccount: "",
      cryptoSelected: cryptoPrice[0].name,
      symbol: cryptoPrice[0].symbol,
      kindOfOperation: currentKindOfExchange,
      rateExchange: currentKindOfExchange
        ? Math.round(
            cryptoPrice[0].price *
              (1 - factorExchange) *
              Math.pow(10, numberOfDecimals)
          ) / Math.pow(10, numberOfDecimals)
        : Math.round(
            cryptoPrice[0].price *
              (1 + factorExchange) *
              Math.pow(10, numberOfDecimals)
          ) / Math.pow(10, numberOfDecimals),
      [e.target.name === "amountToSend" ? "amountToSend" : "amountToReceive"]:
        Number(e.target.value),
      [e.target.name === "amountToSend" ? "amountToReceive" : "amountToSend"]:
        e.target.name === "amountToSend"
          ? convert(Number(e.target.value), "amountToSend")
          : convert(Number(e.target.value), "amountToReceive"),
      currentUser: usuarios.email,
      name: usuarios.name,
    };

    dispatch(modifyTransaction(dataUpdated));
  }

  //Set the current crypto name
  const [currentCrypto, setCurrentCrypto] = useState("");
  const [currentTrade, setCurrentTrade] = useState({
    amountToSend: "",
    amountToReceive: "",
  });

  function convert(amount, type) {
    if (currentKindOfExchange) {
      if (type === "amountToSend") {
        return (
          Math.round(
            (amount / (cryptoPrice[0].price * (1 - factorExchange))) *
              Math.pow(10, numberOfDecimals)
          ) / Math.pow(10, numberOfDecimals)
        );
      } else {
        return (
          Math.round(
            amount *
              (cryptoPrice[0].price * (1 - factorExchange)) *
              Math.pow(10, 2)
          ) / Math.pow(10, 2)
        );
      }
    } else {
      if (type === "amountToSend") {
        return (
          Math.round(
            amount *
              (cryptoPrice[0].price * (1 + factorExchange)) *
              Math.pow(10, 2)
          ) / Math.pow(10, 2)
        );
      } else {
        // return (5)
        return (
          Math.round(
            (amount / (cryptoPrice[0].price * (1 + factorExchange))) *
              Math.pow(10, numberOfDecimals)
          ) / Math.pow(10, numberOfDecimals)
        );
      }
    }
  }

  function handleCryptoName(e) {
    dispatch(getCryptoPrice(e.target.value));
    setCurrentCrypto(e.target.value);
  }

  function handleExchange(e) {
    setCurrentTrade({
      [e.target.name !== "amountToSend" ? "amountToReceive" : "amountToSend"]:
        e.target.value,
      [e.target.name === "amountToSend" ? "amountToReceive" : "amountToSend"]:
        e.target.name === "amountToSend"
          ? convert(e.target.value, "amountToSend")
          : convert(e.target.value, "amountToReceive"),
    });
  }

  function handleUpdate(e) {
    setCurrentTrade({
      amountToSend: currentTrade.amountToSend,
      amountToReceive: convert(currentTrade.amountToSend, "amountToReceive"),
    });
  }

  //Boton de cambio de compra-venta
  function handleKindOfExchange() {
    currentKindOfExchange
      ? setCurrentKindOfExchange(false)
      : setCurrentKindOfExchange(true);
    setCurrentTrade({
      amountToSend: currentTrade.amountToSend,
      amountToReceive: convert(currentTrade.amountToSend, "amountToReceive"),
    });
  }

  return (
    <div className="col-5">
      <div className="">
        <div className="card-1 ">
          <div className="card-body">
            <h1 className="card-title text-center mb-2">{`Bienvenido ${
              usuarios.name ? usuarios.name : "a Coin+"
            }`}</h1>
            <h5 className="text-center border-bottom">Tipo de cambio hoy</h5>
            <div className="d-flex justify-content-center">
              <select
                defaultValue="Category"
                className="name-filt col-5  m-3 "
                onChange={(e) => {
                  handleCryptoName(e);
                  handleUpdate(e);
                }}
                value={currentCrypto}
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
                      {"$" +
                        Math.round(
                          cryptoPrice[0].price *
                            (1 - factorExchange) *
                            Math.pow(10, numberOfDecimals)
                        ) /
                          Math.pow(10, numberOfDecimals)}
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </div>
                <div className="col">
                  <h6 className="text-center">Venta</h6>
                  {cryptoPrice.length > 0 ? (
                    <p className="text-center">
                      {"$" +
                        Math.round(
                          cryptoPrice[0].price *
                            (1 + factorExchange) *
                            Math.pow(10, numberOfDecimals)
                        ) /
                          Math.pow(10, numberOfDecimals)}
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </div>
              </div>
            </div>
            <div claessName="container">
              <div className="container">
                <div className="row">
                  <h6 className="text-center">
                    Enviar {currentKindOfExchange ? "Dólares" : "Criptomonedas"}
                  </h6>
                  <div className=" d-flex justify-content-center">
                    {currentKindOfExchange ? (
                      <div className=" d-flex align-items-center">$</div>
                    ) : (
                      <span>
                        {cryptoPrice.length > 0 ? (
                          <div className=" d-flex align-items-center">
                            {cryptoPrice[0].symbol}
                          </div>
                        ) : (
                          <div className=" d-flex align-items-center">$</div>
                        )}
                      </span>
                    )}
                    <input
                      type="text"
                      name="amountToSend"
                      className="col-5 m-3  rounded-1 border border-dark"
                      placeholder="Ingrese monto a convertir..."
                      value={currentTrade.amountToSend}
                      onChange={(e) => {
                        handleChange(e);
                        handleExchange(e);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="container d-flex justify-content-center mb-2 mt-2 ">
                  <div className="row">
                    <img
                      style={{ width: "5rem" }}
                      src={reverseLogo}
                      alt=""
                      type="button"
                      onClick={handleKindOfExchange}
                    />
                  </div>
                </div>

                <div className="row">
                  <h6 className="text-center">
                    Recibe {currentKindOfExchange ? "Criptomonedas" : "Dólares"}{" "}
                  </h6>
                  <div className="container d-flex justify-content-center">
                    {currentKindOfExchange ? (
                      <div className="d-flex align-items-center">
                        {cryptoPrice.length > 0 ? (
                          <p className="mt-3">{cryptoPrice[0].symbol}</p>
                        ) : (
                          <p>$</p>
                        )}
                      </div>
                    ) : (
                      <p>$</p>
                    )}
                    <input
                      type="text"
                      name="amountToReceive"
                      value={currentTrade.amountToReceive}
                      className="col-5 m-3 rounded-1 border border-dark"
                      placeholder={
                        currentKindOfExchange
                          ? ""
                          : "Ingrese monto a convertir..."
                      }
                      onChange={(e) => {
                        handleChange(e);
                        handleExchange(e);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
