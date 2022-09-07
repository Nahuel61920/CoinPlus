import React, { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

import useFetch from "./useFetch";
import dummyData from "../../utils/dummyData";
import { shortenAddress } from "../../utils/shortenAddress";
import NavProfile from "../../components/Nav/NavProfile";
import Logo from "../../assets/img/coin+logo.png";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="col-4 gap-4 md:col-6 lg:col-4 xl:col-4 p-2 md:p-4 lg:p-6 xl:p-6">
      <div className="d-flex flex-column justify-content-center  card-transaction">
        <div className="display-flex text-center justify-content-start w-full p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base">Desde: {shortenAddress(addressFrom)}</p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base">Para: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-base">Cantidad: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-base">Mensaje: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full"
          height="150"
        />
        <div className="bg-black p-3 px-5 text-center bg-hora-tranc">
          <p className="text-white font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="bg-global">
      <NavProfile logo={Logo}/>
    <div className="d-flex w-full justify-content-center justify-items-center 2xl:px-20">
      <div className="d-flex flex-column md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-3xl text-center my-2">Últimas Transacciones</h3>
        ) : (
          <h3 className="text-3xl text-center my-2">
             Últimas Transacciones
          </h3>
        )}

        <div className="d-flex flex-wrap justify-content-center justify-items-center mt-5">
          {[...dummyData, ...transactions.slice(1, transactions.length)].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Transactions;
