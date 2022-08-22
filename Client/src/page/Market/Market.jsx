import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { fetchCrypto } from "../../redux/reducers/cryptoRed";
import Cryptos from "../Cryptos/Cryptos";
import NavAl from "../../components/Nav/NavAl";
import axios from "axios";
import Paginate from "../../components/Paginate/Paginate"



function Market() {
  const dispatch = useDispatch();
  const { cryptos } = useSelector((state) => state.crypto);


  const [currentPage, setCurrentPage] = useState(1);
  const [crypsPerPage, setCrypsPerPage] = useState(50);
  const indexOfLastCryp = currentPage * crypsPerPage; //15
  const indexOfFirstCryp = indexOfLastCryp - crypsPerPage; //0
  const currentCryps = cryptos.slice(indexOfFirstCryp, indexOfLastCryp);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div>
      <NavAl />

      <div className="container-xxl my-4">
        <h1 className="fw-bold text-center">Market</h1>
        <p className="text-center">Precio de las criptomonedas de hoy</p>
        <div className="row d-flex align-items-center border-top border-bottom border-2 mt-4 pt-3 px-4">
          <Paginate crypsPerPage={crypsPerPage}
          cryptos={cryptos?.length}
          paginate={paginado}
           />
          <div className="col-1">
            <p className="fw-bold">#</p>
          </div>
          <div className="col-1">
            <p className="fw-bold">Nombre</p>
          </div>
          <div className="col-1">
            <p className="fw-bold">Precio</p>
          </div>
          <div className="col-1">
            <p className="fw-bold">1h %</p>
          </div>
          <div className="col-1">
            <p className="fw-bold">24h %</p>
          </div>
          <div className="col-1">
            <p className="fw-bold">7d %</p>
          </div>
          <div className="col-2">
            <p className="fw-bold">Market Cap</p>
          </div>
          <div className="col-2">
            <p className="fw-bold">Volumen</p>
          </div>
          <div className="col-2">
            <p className="fw-bold">Ultimos 7 dias</p>
          </div>
        </div>
        {currentCryps.map((c, index) => {
          return (
            <Cryptos
              keyNumber={index + 1}
              id={c.id}
              key={index}
              name={c.name}
              price={c.price}
              symbol={c.symbol}
              volume_24h={c.volume_24h}
              percent_change_1h={c.percent_change_1h}
              percent_change_24h={c.percent_change_24h}
              percent_change_7d={c.percent_change_7d}
            />
          );
        })}

      </div>
      <Footer />
    </div>
  );
}

export default Market;
