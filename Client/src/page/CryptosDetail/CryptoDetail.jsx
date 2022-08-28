import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCrypto, cleanState } from "../../redux/reducers/cryptoRed";
import NavAl from "../../components/Nav/NavAl";
import Footer from "../../components/Footer/Footer";
import load from "../../assets/img/load.gif";
import "./crypto.css"

function CryptoDetail() {
  const { id } = useParams();
  const { details } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [charge, setCharge] = useState(false);

  let porcentaje1h = details.price*(details.percent_change_1h/100)+details.price;
  let porcentaje24h = details.price*(details.percent_change_24h/100)+details.price;
  let porcentaje7d = details.price*(details.percent_change_7d/100)+details.price;
  let porcentaje30d = details.price*(details.percent_change_30d/100)+details.price;
  let porcentaje60d = details.price*(details.percent_change_60d/100)+details.price;
  let porcentaje90d = details.price*(details.percent_change_90d/100)+details.price;

  console.log(porcentaje1h);
  console.log(porcentaje24h);
  console.log(porcentaje7d);
  console.log(porcentaje30d);
  console.log(porcentaje60d);
  console.log(porcentaje90d);


  

  useEffect(() => {
    setCharge(true);
    setTimeout(() => {
      setCharge(false);
    }, 4000);
    dispatch(detailCrypto(id));
    return () => {
      dispatch(cleanState());
    }
  } , [dispatch, id]);

  
  
  return (
    <>
    <NavAl/>
    { details.price ? (
        <div className="container-xl">
          <div className="row d-flex align-items-center border-top border-bottom border-2 py-3">
            <div className="d-flex gap-3 col-6 align-items-center">
              <img className="imagdetalle" src={details.logo} alt={details.id} height="50"/>
              <h1>
                {details.name} <span>{details.symbol}</span>
              </h1>
            </div>
            <div className="col-6">
                <h1 className="fw-bold text-end">
                  Precio: <span> ${
                    !details.price ? " " : details.price.toLocaleString( "en-US" )
                  }</span>
                </h1>
            </div>
          </div>
          <div className="cardDetalle gap-3">
            
            <div className="my-4 base2">
              <h2>Description: <span className="fs-4">{details.description}</span></h2>
            </div>
            <div className="base4">
              <h2>Volumen cada 24h: <span>${
                    !details.volume_24h ? " " : details.volume_24h.toLocaleString( "en-US" )
                  }</span></h2>
            </div>
            <div className="base3">
              <h2>Volumen de cambio cada 24h: {" "}
                {
                  !details.volume_change_24h ? " " : 
                  details.volume_change_24h > 0 ? (
                    <span className="text-success">
                      {details.volume_change_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.volume_change_24h.toFixed(2)}%
                    </span>
                  )
                
                }
              </h2>
            </div>
            <h2 className="text-center m-4">Cambio porcentual</h2>
            <div className="row d-flex align-items-center border border-2">
              <div className="col-2 info-detail-cry">
                <h4>Cambio 1h:</h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>Cambio 24h:</h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>Cambio 7d:</h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>Cambio 30d:</h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>Cambio 60d:</h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>Cambio 90d:</h4>
              </div>
            </div>
            <div className="row d-flex align-items-center  border border-2 mb-3">
              <div className="col-2 info-detail-cry">
                <h4>
                  {
                  !details.percent_change_1h ? " " : 
                  details.percent_change_1h > 0 ? (
                    <span className="text-success">
                      {details.percent_change_1h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_1h.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                {
                  !details.percent_change_24h ? " " : 
                  details.percent_change_24h > 0 ? (
                    <span className="text-success">
                      {details.percent_change_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_24h.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
              <h4>
                {
                  !details.percent_change_7d ? " " : 
                  details.percent_change_7d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_7d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_7d.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
              <h4>
                {
                  !details.percent_change_30d ? " " : 
                  details.percent_change_30d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_30d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_30d.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
              <h4>
                {
                  !details.percent_change_60d ? " " : 
                  details.percent_change_60d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_60d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_60d.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
              <h4>
              {
                  !details.percent_change_90d ? " " : 
                  details.percent_change_90d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_90d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_90d.toFixed(2)}%
                    </span>
                  )
                }
                </h4>
              </div>
            </div>
            <h2 className="text-center m-4">Categorias</h2>
            <div className="d-flex align-items-center justify-content-center flex-wrap mb-2">
                {
                  details.tag_names.length ? details.tag_names.map( (tag, index) => {
                    return (
                      <div className="d-flex  " key={index}>
                        <h4 className={"bg_categori bg" + index}>{tag}</h4>
                      </div>
                    )
                  } ) : <h4>No hay categorias</h4>
                }
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-5">
          <img src={load} alt="loading" height="200" className="my-5" />
        </div>
      )
    }
    <Footer/>
    </>
  );
}

export default CryptoDetail;
