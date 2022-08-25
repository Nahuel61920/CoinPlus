import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import {
  fetchCrypto,
  categoryCrypto,
  filterCategories,
  filterPlatforms,
  orderCrypto,
  filterPrice,
  filterVolume,
  filterForPercentChange1h,
  filterForPercentChange24h,
  filterForPercentChange7d,
  filterForVolume24,
  orderByName,
} from "../../redux/reducers/cryptoRed";
import Cryptos from "../Cryptos/Cryptos";
import NavAl from "../../components/Nav/NavAl";
import Paginate from "../../components/Paginate/Paginate";
import "./market.css";
import load from "../../assets/img/load.gif";

function Market() {
  const dispatch = useDispatch();
  const { cryptos, category } = useSelector((state) => state.crypto);
  console.log(cryptos);

  const [charge, setCharge] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [crypsPerPage, setCrypsPerPage] = useState(50);
  const indexOfLastCryp = currentPage * crypsPerPage; //15
  const indexOfFirstCryp = indexOfLastCryp - crypsPerPage; //0
  const currentCryps = cryptos.slice(indexOfFirstCryp, indexOfLastCryp);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 4000);
    dispatch(fetchCrypto());
    dispatch(categoryCrypto());
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

  function handleSubmit(e) {
    let tag = e.toString();
    dispatch(orderCrypto(tag));
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
    <div>
      <NavAl setCurrentPage={setCurrentPage}/>

      <div className="container-xxl my-4">
        <h1 className="fw-bold text-center">Market</h1>
        <p className="text-center">Precio de las criptomonedas de hoy</p>
        <div className="row d-flex align-items-center justify-content-center border-top border-bottom border-2 mt-4 pt-3 px-4">
          {/* <select
            className="name-filt col-5 m-3"
            onChange={(e) => {
              handleSubmit(e.target.value);
            }}
          >
            <option className="nav-links" value="All">
              Cryptos
            </option>
            <option value={"INDUSTRY"}>Industry</option>
            <option value={"PLATFORM"}>Platform</option>
            <option value={"CATEGORY"}>Category</option>
            <option value={"OTHERS"}>Others</option>
            <option value={"ALGORITHM"}>Algoritm</option>
            {cryptos.map((tag_groups, index) => (
              <option key={index} value={tag_groups.value}>
                {" "}
                {tag_groups}{" "}
              </option>
            ))}
          </select> */}
          <select
            defaultValue="Category"
            className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
            onChange={(e) => handleSubmitCategory(e.target.value)}
          >
            <option value="All">
              Category
            </option>
            {category
            .map(
              (
                capt,
                key
              ) => (
                <option key={key} value={capt.name}>
                  {" "}
                  {capt.name}
                </option>
              )
            )}
          </select>
          
          <select
            defaultValue="Platform"
            className="name-filt col-5  m-3 animate__animated animate__bounceInRight animate__delay-2s"
            onChange={(e) => handleSubmitPlatform(e.target.value)}
          >
            <option value="All">
             Platform
            </option>
            <option value="TRON Ecosystem">
              TRON Ecosystem
            </option>
            <option value="Ethereum Ecosystem">
              Ethereum Ecosystem
            </option>
            <option value="Asset-Backed Token">
              Asset-Backed Token
            </option>
            <option value="Polkadot">
              Polkadot
            </option>
            <option value="Binance Chain">
              Binance Chain
            </option>
            <option value="Polkadot Ecosystem">
              Polkadot Ecosystem
            </option>
            <option value="Fantom Ecosystem">
              Fantom Ecosystem
            </option>
            <option value="Solana Ecosystem">
              Solana Ecosystem
            </option>
            <option value="Arbitrum Ecosytem">
              Arbitrum Ecosytem
            </option>
            <option value="Bnb Chain">
              Bnb Chain
            </option>
            <option value="Injective Ecosystem">
              Injective Ecosystem
            </option>
            {/* {category
            .map(
              (
                capt,
                key
              ) => (
                <option key={key} value={capt.name}>
                  {" "}
                  {capt.name}
                </option>
              )
            )} */}
          </select>
          <Paginate
            crypsPerPage={crypsPerPage}
            cryptos={cryptos.length}
            currentPage={currentPage}
            paginate={paginado}
          />
          <div className="col-1 select_filter">
            <p className="fw-bold">#</p>
          </div>
          <div className="col-3 select_filter">
            <select
              defaultValue="name"
              onChange={(e) => handleSortOrderByName(e)}
            >
              <option className="p-2" value="name">
                Nombre
              </option>
              <option value="asc">Nombre (A-Z)</option>
              <option value="desc">Nombre (Z-A)</option>
            </select>
          </div>
          <div className="col-1 select_filter">
            <select defaultValue="Precio" onChange={(e) => handleSort(e)}>
              <option value="Precio">Precio</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-1 select_filter">
            <select
              defaultValue="1h"
              onChange={(e) => handleSortPercentChange1h(e)}
            >
              <option value="1h">1h %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-1 select_filter">
            <select
              defaultValue="24h"
              onChange={(e) => handleSortPercentChange24h(e)}
            >
              <option value="24h">24h %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-1 select_filter">
            <select
              defaultValue="7d"
              onChange={(e) => handleSortPercentChange7d(e)}
            >
              <option value="7d">7d %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 select_filter">
            <select
              defaultValue="Volumen"
              onChange={(e) => handleSortVolume(e)}
            >
              <option value="Volumen">Volumen</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
          <div className="col-2 select_filter">
            <select
              defaultValue="Volumen24h"
              onChange={(e) => handleSortfilterForVolume24(e)}
            >
              <option value="Volumen24h">Volumen 24h %</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
        </div>
        {currentCryps.length ? (
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
              />
            );
          })
        ) : (
          <div className="d-flex justify-content-center my-5">
            <img src={load} alt="loading" height="200" className="my-5" />
          </div>
        )}
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default Market;
