import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import metamaskLogo from "../../assets/img/metamask-logo.png";
import paypalLogo from "../../assets/img/paypal-logo.png";
import { TransactionContext } from "../../context/TransactionContext";
import axios from "axios";
import { sendTransactionDetail } from "../../redux/reducers/cryptoRed";
import Timer from "./Timer";
import { FormattedMessage } from "react-intl";


export default function Transference() {
  const { transactions } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const [url, setUrl] = useState("");
  const compra = transactions.amountToSend;

  async function handleCobrar(compra) {
    try {
      const dolariki = compra;
      const pay = await axios
        .post(`/create-order?dolariki=${dolariki}`)
        .then((res) => {
          return res.data.links[1].href;
        })
        .then((res) => setUrl(res));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleCobrar(compra);
  }, []);

  const { sendTransaction, formData, handleOtherChange } =
    useContext(TransactionContext);

  //colocar datos al estado para ejecutar transacción
  useEffect(() => {
    insertData();
  }, []);

  const insertData = () => {
    const data = {
      addressTo: "0x86aC631914B824B8B1523F47942f30427a20F51A",
      amount: transactions.amountToSend.toString(),
      keyword: "1",
      message: "Default message001",
    };
    handleOtherChange(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      addressTo: "0x86aC631914B824B8B1523F47942f30427a20F51A",
      amount: transactions.amountToSend.toString(),
      keyword: "1",
      message: "Default message001",
    };
    handleOtherChange(data);

    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const sendCurrentDataTranfer = (e) => {
    const currentDataTranfer = {
      amountToSend: transactions.amountToSend,
      amountToReceive: transactions.amountToReceive,
      kindOfOperation: transactions.kindOfOperation,
      cryptoSelected: transactions.cryptoSelected,
      symbol: transactions.symbol,
      rateExchange: transactions.rateExchange,
      metamaskAccount: transactions.metamaskAccount,
      currentUser: transactions.currentUser,
      name: transactions.name,
    };

    dispatch(sendTransactionDetail(currentDataTranfer));
  };

  return (
    <div
      className="container d-flex justify-content-center col-10 col-md-7"
    >
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-evenly">
          <h4 className="card-title text-center"><FormattedMessage
            id='trans-ahora'
            defaultMessage='Transfer Now'
          />{`${transactions.kindOfOperation ? "$" : transactions.symbol
            } ${transactions.amountToSend} a Coin+`}</h4>
          {transactions.kindOfOperation ? (
            <>
              <div className="d-flex justify-content-center p-5">
                {url.length ? (
                  <a
                    href={url}
                    target="_blank"
                    onClick={sendCurrentDataTranfer}
                  >
                    <button
                      style={{ width: "12rem" }}
                      type="button"
                      className="btn-primary"
                    >
                      <FormattedMessage
                        id='btn-trasn'
                        defaultMessage='Complete transaction'
                      />
                    </button>
                  </a>
                ) : (
                  <h1></h1>
                )}
              </div>
              <div className="container text-center">
                <img
                  style={{ width: "16rem" }}
                  src={paypalLogo}
                  alt=""
                  className="mb-5"
                />
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center p-5">
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                    sendCurrentDataTranfer(e);
                  }}
                  style={{ width: "12rem" }}
                  type="button"
                  className="btn-primary"
                >
                  <FormattedMessage
                    id='btn-trasn'
                    defaultMessage='Complete transaction'
                  />
                </button>
              </div>
              <div className="container text-center">
                <img
                  style={{ width: "6rem" }}
                  src={metamaskLogo}
                  alt=""
                  className="mb-5"
                />
              </div>
            </>
          )}

          <div className="container text-center">
            <p><FormattedMessage
              id='Espera'
              defaultMessage='Approximate waiting time'
            /></p>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}
