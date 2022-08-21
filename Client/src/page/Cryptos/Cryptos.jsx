import React from "react";
import { Link } from "react-router-dom";

function Cryptos({
  keyNumber,
  id,
  name,
  symbol,
  price,
  volume_24h,
  volume_change_24h,
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  percent_change_30d,
  percent_change_60d,
  percent_change_90d,
}) {
  return (
    <div className="row d-flex align-items-center border-top border-bottom border-2 pt-3 px-4">
      <div className="col-1">
        <p className="fw-bold">{keyNumber}</p>
      </div>
      <div className="col-1">
      <Link className="por" to={`/crypto/${id}`}>
        <p className="fw-bold">
          {name} <span>{symbol}</span>
        </p>
        </Link>
      </div>
      <div className="col-1">
        <p className="fw-bold">${price.toFixed(3)}</p>
      </div>
      <div className="col-1">
        {
          percent_change_1h > 0 ? (
            <p className="fw-bold text-success">{percent_change_1h.toFixed(2)}%</p>
          ) : (
            <p className="fw-bold text-danger">{percent_change_1h.toFixed(2)}%</p>
          )
        }
      </div>
      <div className="col-1">
        {
          percent_change_24h > 0 ? (
            <p className="fw-bold text-success">{percent_change_24h.toFixed(2)}%</p>
          ) : (
            <p className="fw-bold text-danger">{percent_change_24h.toFixed(2)}%</p>
          )
        }
      </div>
      <div className="col-1">
        {
          percent_change_7d > 0 ? (
            <p className="fw-bold text-success">{percent_change_7d.toFixed(2)}%</p>
          ) : (
            <p className="fw-bold text-danger">{percent_change_7d.toFixed(2)}%</p>
          )
        }
      </div>
      <div className="col-2">
        <p className="fw-bold">${volume_24h.toFixed(2)}</p>
      </div>
      <div className="col-2">
        <p className="fw-bold">
          - <span>-</span>
        </p>
      </div>
      <div className="col-2">
        <p className="fw-bold">{percent_change_7d.toFixed(2)}%</p>
      </div>
      
        
    </div>
  );
}

export default Cryptos;
