import React from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Cryptos({
  keyNumber,
  id,
  name,
  symbol,
  price,
  volume_24h,
  logo,
  volume_change_24h,
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  percent_change_30d,
  percent_change_60d,
  percent_change_90d,
  tag_names,
}) {

  let porcentajeCam3h = percent_change_1h / 2;
  let porcentajeCam6h = percent_change_24h / 2;
  let porcentajeCam12h = percent_change_7d / 2;
  let porcentajeCam2d = percent_change_7d / 1.5;
  let porcentajeCam3d = percent_change_7d / 1.2;
  let porcentajeCam4d = percent_change_1h / 2.5;
  let porcentajeCam5d = percent_change_24h / 1.7;
  let porcentajeCam6d = percent_change_24h / 1;
  let porcentajeCam30d = percent_change_24h / -.8;
  let porcentajeCam60d = percent_change_24h / -2.6;
  let porcentajeCam90d = percent_change_24h / -.4;

  let porcentaje1h =
    price * (percent_change_1h / 100) + price ;
  let porcentaje3h = (price * porcentajeCam3h) / 100 + price;
  let porcentaje6h = (price * porcentajeCam6h) / 100 + price;
  let porcentaje12h = (price * porcentajeCam12h) / 100 + price;
  let porcentaje24h =
    price * (percent_change_24h / 100) + price;
  let porcentaje2d = (price * porcentajeCam2d) / 100 + price;
  let porcentaje3d =
    price * (porcentajeCam3d / 100) + price;
  let porcentaje4d = (price * porcentajeCam4d) / 100 + price;
  let porcentaje5d = (price * porcentajeCam5d) / 100 + price;
  let porcentaje6d = (price * porcentajeCam6d) / 100 + price;
  let porcentaje7d =
    price * (percent_change_7d / 100) + price;
  let porcentaje30d =
    price * (porcentajeCam30d / 100) + price;
  let porcentaje60d =
    price * (porcentajeCam60d / 100) + price;
  let porcentaje90d =
    price * (porcentajeCam90d / 100) + price;

    const scores = [
      porcentaje2d,
      porcentaje90d,
      porcentaje60d,
      porcentaje30d,
      porcentaje6d,
      porcentaje5d,
      porcentaje4d,
      porcentaje3d,
      porcentaje7d,
      porcentaje24h,
      porcentaje12h,
      porcentaje6h,
      porcentaje3h,
      porcentaje1h,
    ];

    const labels = [
      porcentajeCam2d + "%",
      porcentajeCam90d + "%",
      porcentajeCam60d + "%",
      porcentajeCam30d + "%",
      porcentajeCam6d + "%",
      porcentajeCam5d + "%",
      porcentajeCam4d + "%",
      porcentajeCam3d + "%",
      percent_change_7d + "%",
      percent_change_24h + "%",
      porcentajeCam12h + "%",
      porcentajeCam6h + "%",
      porcentajeCam3h + "%",
      percent_change_1h + "%",
    ];

    const options = {
      fill: false,
      responsive: true,
      plugins: {
        legend: {
            display: false
        },
      },
      scales: {
        x: {
          display: false,
          
        },
        y: {
          display: false,
          endOnTick:false
        }
      },
    };
  
    const data = {
      datasets: [
        {
          label: "USD",
          data: scores,
          pointRadius: 2,
          borderColor: price > porcentaje7d ? "rgba(255, 99, 132, 1)" : "rgba(54, 235, 162, 1)",
        },
      ],
      labels,
    };


  return (
    <div className="row d-flex align-items-center pt-3 px-4 row-crypto">
      <div className="col-1">
        <p className="fw-bold">{keyNumber}</p>
      </div>
      <div className="col-3 d-flex name-cry-info">
        <img src={logo} alt={name} />
        <Link className="por" to={`/market/${id}`} style={{ textDecoration: 'none' }}>
          <p className="fw-bold px-2">
            {name} <span>{symbol}</span> 
          </p>
        </Link>
        {tag_names.filter((tag) => tag === "ethereum-ecosystem").length > 0 ? <button className="ethereum-ecosystem">Comprar</button> : null}
      </div>
      <div className="col-2 col-md-1">
        <p className="fw-bold">${price.toLocaleString( "en-US" )}</p>
      </div>
      <div className="col-2 col-md-1">
        {percent_change_1h > 0 ? (
          <p className="fw-bold text-success">
            {percent_change_1h.toFixed(2)}%
          </p>
        ) : (
          <p className="fw-bold text-danger">{percent_change_1h.toFixed(2)}%</p>
        )}
      </div>
      <div className="col-2 col-md-1">
        {percent_change_24h > 0 ? (
          <p className="fw-bold text-success">
            {percent_change_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="fw-bold text-danger">
            {percent_change_24h.toFixed(2)}%
          </p>
        )}
      </div>
      <div className="col-2 col-md-1">
      {percent_change_7d > 0 ? (
          <p className="fw-bold text-success">
            {percent_change_7d.toFixed(2)}%
          </p>
        ) : (
          <p className="fw-bold text-danger">{percent_change_7d.toFixed(2)}%</p>
        )}
      </div>
      <div className="col-2 info-cry-none">
        <p className="fw-bold">
        ${volume_24h.toLocaleString( "en-US" )}
        </p>
      </div>
      <div className="col-2 info-cry-none">
      <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Cryptos;
