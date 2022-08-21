import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { fetchCrypto } from "../../redux/reducers/cryptoRed";
import Cryptos from "../Cryptos/Cryptos";
import NavAl from "../../components/Nav/NavAl"
function Market() {
  const dispatch = useDispatch();

  const { cryptos } = useSelector((state) => state.crypto);

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
        {cryptos.map((c, index) => {
          return (
            <Cryptos
              keyNumber={index + 1}
              id={c.id}
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
