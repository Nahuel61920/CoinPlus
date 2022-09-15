import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import {
  fetchCrypto,
  fetchCryptoBest,
  categoryCrypto,
  filterCategories,
  filterPlatforms,
  filterPrice,
  filterVolume,
  filterForPercentChange1h,
  filterForPercentChange24h,
  filterForPercentChange7d,
  filterForVolume24,
  orderByName,
  loadingSet,
} from "../../redux/reducers/cryptoRed";
import Cryptos from "../Cryptos/Cryptos";
import NavMarket from "../../components/Nav/NavMarket";
import Paginate from "../../components/Paginate/Paginate";
import CryptoBest from "../../components/CryptoBest/CryptoBest";
import "./market.css";
import load from "../../assets/img/load.gif";
import noCryptos from "../../assets/img/no_crypto_found.png";

import { FormattedMessage } from "react-intl";

function Market() {
  const dispatch = useDispatch();
  const { cryptos, bestCrypto, category, isLoading } = useSelector(
    (state) => state.crypto
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [crypsPerPage, setCrypsPerPage] = useState(50);
  const indexOfLastCryp = currentPage * crypsPerPage; //15
  const indexOfFirstCryp = indexOfLastCryp - crypsPerPage; //0
  const currentCryps = cryptos.slice(indexOfFirstCryp, indexOfLastCryp);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(loadingSet());
    dispatch(fetchCrypto());
    dispatch(categoryCrypto());
    dispatch(fetchCryptoBest());
  }, [dispatch]);

  function handleSubmitCategory(e) {
    let tag = e.toString();
    dispatch(filterCategories(tag));
    setCurrentPage(1);
  }

  function handleSubmitPlatform(e) {
    let tag = e.toString();
    dispatch(filterPlatforms(tag));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(filterPrice(e.target.value));
    setCurrentPage(1);
  }

  function handleSortVolume(e) {
    e.preventDefault();
    dispatch(filterVolume(e.target.value));
    setCurrentPage(1);
  }

  function handleSortPercentChange1h(e) {
    e.preventDefault();
    dispatch(filterForPercentChange1h(e.target.value));
    setCurrentPage(1);
  }

  function handleSortPercentChange24h(e) {
    e.preventDefault();
    dispatch(filterForPercentChange24h(e.target.value));
    setCurrentPage(1);
  }

  function handleSortPercentChange7d(e) {
    e.preventDefault();
    dispatch(filterForPercentChange7d(e.target.value));
    setCurrentPage(1);
  }

  function handleSortfilterForVolume24(e) {
    e.preventDefault();
    dispatch(filterForVolume24(e.target.value));
    setCurrentPage(1);
  }

  function handleSortOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className="bg-global">
      <NavMarket setCurrentPage={setCurrentPage} />

      <div className="container-xxl my-4">
        <h1 className="fw-bold text-center"><FormattedMessage
          id='Mercado'
          defaultMessage='Market'
        /></h1>
        <p className="text-center"><FormattedMessage
          id='Mercado-sub'
          defaultMessage='Cryptocurrency price today'
        /></p>
        <div className="row d-flex align-items-center justify-content-center mt-4 pt-3 px-4">
          <CryptoBest bestCrypto={bestCrypto} />

          <div className="row d-flex align-items-center justify-content-center">
            <select
              defaultValue="Category"
              className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
              onChange={(e) => handleSubmitCategory(e.target.value)}
            >
              <option value="All"><FormattedMessage
                id='categoria'
                defaultMessage='Category'
              /></option>
              {category.map((capt, key) => (
                <option key={key} value={capt.name}>
                  {" "}
                  {capt.name}
                </option>
              ))}
            </select>

            <select
              defaultValue="Platform"
              className="name-filt col-5  m-3 animate__animated animate__bounceInRight animate__delay-2s"
              onChange={(e) => handleSubmitPlatform(e.target.value)}
            >
              <option key="todo" value="All">
                <FormattedMessage
                  id='plataforma'
                  defaultMessage='Platform'
                />
              </option>
              <option key="TRON Ecosystem" value="TRON Ecosystem">
                TRON Ecosystem
              </option>
              <option key="Ethereum Ecosystem" value="Ethereum Ecosystem">
                Ethereum Ecosystem
              </option>
              <option key="Asset-Backed Token" value="Asset-Backed Token">
                Asset-Backed Token
              </option>
              <option key="Polkadot" value="Polkadot">
                Polkadot
              </option>
              <option key="Binance Chain" value="Binance Chain">
                Binance Chain
              </option>
              <option key="Polkadot Ecosystem" value="Polkadot Ecosystem">
                Polkadot Ecosystem
              </option>
              <option key="Fantom Ecosystem" value="Fantom Ecosystem">
                Fantom Ecosystem
              </option>
              <option key="Solana Ecosystem" value="Solana Ecosystem">
                Solana Ecosystem
              </option>
              <option key="Arbitrum Ecosytem" value="Arbitrum Ecosytem">
                Arbitrum Ecosytem
              </option>
              <option key="Bnb Chain" value="Bnb Chain">
                Bnb Chain
              </option>
              <option key="Injective Ecosystem" value="Injective Ecosystem">
                Injective Ecosystem
              </option>
            </select>
          </div>
          {currentCryps.length ? (
            <Paginate
              crypsPerPage={crypsPerPage}
              cryptos={cryptos.length}
              currentPage={currentPage}
              paginate={paginado}
            />
          ) : (
            <></>
          )}
          <div className="col-1 select_filter info-cry-none">
            <p className="fw-bold">#</p>
          </div>
          <div className="col-4 col-md-3 select_filter">
            <select
              defaultValue="name"
              onChange={(e) => handleSortOrderByName(e)}
            >
              <option className="p-2" value="name">
                <FormattedMessage
                  id='Nombre'
                  defaultMessage='Name'
                />
              </option>
              <option value="asc"><FormattedMessage
                id='Nombre'
                defaultMessage='Name'
              /> (A-Z)</option>
              <option value="desc"><FormattedMessage
                id='Nombre'
                defaultMessage='Name'
              /> (Z-A)</option>
            </select>
          </div>
          <div className="col-2 col-md-1 select_filter">
            <select defaultValue="Precio" onChange={(e) => handleSort(e)}>
              <option value="Precio"><FormattedMessage
                id='Precio'
                defaultMessage='Price'
              /></option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 col-md-1 select_filter text-end">
            <select
              defaultValue="1h"
              onChange={(e) => handleSortPercentChange1h(e)}
            >
              <option value="1h">1h %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 col-md-1 select_filter">
            <select
              defaultValue="24h"
              onChange={(e) => handleSortPercentChange24h(e)}
            >
              <option value="24h">24h %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 col-md-1 select_filter">
            <select
              defaultValue="7d"
              onChange={(e) => handleSortPercentChange7d(e)}
            >
              <option value="7d">7d %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 select_filter info-cry-none">
            <select
              defaultValue="Volumen"
              onChange={(e) => handleSortVolume(e)}
            >
              <option value="Volumen"><FormattedMessage
                id='Volumen'
                defaultMessage='Volume'
              /></option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 select_filter info-cry-none">
            <select
              defaultValue="Volumen24h"
              onChange={(e) => handleSortfilterForVolume24(e)}
            >
              <option value="Volumen24h"><FormattedMessage
                id='Ultimo'
                defaultMessage='Last 7 days'
              /></option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="d-flex justify-content-center my-5">
            <img src={load} alt="loading" height="200" className="my-5" />
          </div>
        ) : currentCryps.length ? (
          currentCryps.map((c, index) => {
            return (
              <Cryptos
                keyNumber={index + 1}
                id={c.id}
                key={index}
                name={c.name}
                price={c.price}
                symbol={c.symbol}
                volume_24h={c.volume_24h}
                volume_change_24h={c.volume_change_24h}
                percent_change_1h={c.percent_change_1h}
                percent_change_24h={c.percent_change_24h}
                percent_change_7d={c.percent_change_7d}
                logo={c.logo}
                tag_names={c.tag_names}
              />
            );
          })
        ) : (
          <div className="d-flex justify-content-center my-5 flex-column">
            <h3 className="text-center">Crypto no encontrada</h3>
            <img
              src={noCryptos}
              alt="noCryptos"
              height="360"
              width="525"
              className="m-auto"
            />
          </div>
        )}
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default Market;
