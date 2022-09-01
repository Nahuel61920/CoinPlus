import React, { useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";

//import useFetch from "../hooks/useFetch";
import dummyData from "../../utils/dummyData";
import { shortenAddress } from "../../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  // const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-[#181918] m-4 d-flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-column p-3 rounded-md hover:shadow-2xl"
    >
      <div className="d-flex flex-column justify-content-center w-full mt-3 card-transac">
        <div className="display-flex text-center justify-content-start w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base">
              Desde: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base">
              Para: {shortenAddress(addressTo)}
            </p>
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
          // src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 text-center mt-3 bg-hora-tranc">
          <p className="text-white font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="d-flex w-full justify-content-center justify-items-center 2xl:px-20">
      <div className="d-flex flex-column md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-3xl text-center my-2">
            Últimas Transacciones
          </h3>
        ) : (
          <h3 className="text-3xl text-center my-2">
            Conecte su cuenta para conocer sus Últimas Transacciones
          </h3>
        )}

        <div className="d-flex flex-wrap justify-content-center justify-items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
