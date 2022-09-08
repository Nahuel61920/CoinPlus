import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { detailCrypto, cleanState } from "../../redux/reducers/cryptoRed";
import NavMarket from "../../components/Nav/NavMarket";
import Footer from "../../components/Footer/Footer";
import load from "../../assets/img/load.gif";
import "./crypto.css";
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

function CryptoDetail() {
  const { id } = useParams();
  const { details } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCrypto(id));
    return () => {
      dispatch(cleanState());
    };
  }, [dispatch, id]);
  let porcentajeCam3h = details.percent_change_1h / 2;
  let porcentajeCam6h = details.percent_change_24h / 2;
  let porcentajeCam12h = details.percent_change_7d / 2;
  let porcentajeCam2d = details.percent_change_30d / 2;
  let porcentajeCam4d = details.percent_change_60d / 2;
  let porcentajeCam5d = details.percent_change_90d / 2;
  let porcentajeCam6d = details.volume_change_24h / 2;

  let porcentaje1h =
    details.price * (details.percent_change_1h / 100) + details.price;
  let porcentaje3h = (details.price * porcentajeCam3h) / 100 + details.price;
  let porcentaje6h = (details.price * porcentajeCam6h) / 100 + details.price;
  let porcentaje12h = (details.price * porcentajeCam12h) / 100 + details.price;
  let porcentaje24h =
    details.price * (details.percent_change_24h / 100) + details.price;
  let porcentaje2d = (details.price * porcentajeCam2d) / 100 + details.price;
  let porcentaje3d =
    details.price * (details.volume_change_24h / 100) + details.price;
  let porcentaje4d = (details.price * porcentajeCam4d) / 100 + details.price;
  let porcentaje5d = (details.price * porcentajeCam5d) / 100 + details.price;
  let porcentaje6d = (details.price * porcentajeCam6d) / 100 + details.price;
  let porcentaje7d =
    details.price * (details.percent_change_7d / 100) + details.price;
  let porcentaje30d =
    details.price * (details.percent_change_30d / 100) + details.price;
  let porcentaje60d =
    details.price * (details.percent_change_60d / 100) + details.price;
  let porcentaje90d =
    details.price * (details.percent_change_90d / 100) + details.price;

  let precio90d = details.percent_change_90d + "%";
  let precio60d = details.percent_change_60d + "%";
  let precio30d = details.percent_change_30d + "%";
  let precio7d = details.percent_change_7d + "%";
  let precio6d = porcentajeCam6d + "%";
  let precio5d = porcentajeCam5d + "%";
  let precio4d = porcentajeCam4d + "%";
  let precio3d = details.volume_change_24h + "%";
  let precio2d = porcentajeCam2d + "%";
  let precio24h = details.percent_change_24h + "%";
  let precio12h = porcentajeCam12h + "%";
  let precio6h = porcentajeCam6h + "%";
  let precio3h = porcentajeCam3h + "%";
  let precio1h = details.percent_change_1h + "%";

  const scores = [
    porcentaje90d,
    porcentaje60d,
    porcentaje30d,
    porcentaje7d,
    porcentaje6d,
    porcentaje5d,
    porcentaje4d,
    porcentaje3d,
    porcentaje2d,
    porcentaje24h,
    porcentaje12h,
    porcentaje6h,
    porcentaje3h,
    porcentaje1h,
  ];
  const labels = [
    precio90d,
    precio60d,
    precio30d,
    precio7d,
    precio6d,
    precio5d,
    precio4d,
    precio3d,
    precio2d,
    precio24h,
    precio12h,
    precio6h,
    precio3h,
    precio1h,
  ];

  const options = {
    fill: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: { y: { title: { display: true, text: "USD" } } },
  };

  const data = {
    datasets: [
      {
        label: "USD",
        data: scores,
        pointRadius: 4,
        backgroundColor:
          details.price > porcentaje1h
            ? "rgba(255, 99, 132, 0.2)"
            : "rgba(54, 235, 162, 0.2",
        segment: {
          borderColor: function (context) {
            let x = context.p1.parsed.y;
            if (x > details.price) {
              return "rgba(0, 255, 0, 1)";
            } else {
              return "rgba(255, 0, 0, 1)";
            }
          },
        },
      },
    ],
    labels,
  };

  return (
    <div className="bg-global">
      <NavMarket />
      {details.price ? (
        <div className="container-xl">
          <div className="row d-flex align-items-center border-detail py-3">
            <div className="d-flex gap-3 col-6 align-items-center">
              <img
                className="imagdetalle"
                src={details.logo}
                alt={details.id}
                height="50"
              />
              <h1>
                {details.name} <span>{details.symbol}</span>
              </h1>
              {details.tag_names.filter((tag) => tag === "ethereum-ecosystem")
                .length > 0 ? (
                <Link
                  className="por"
                  to={`/operation`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="ethereum-ecosystem">Comprar</button>
                </Link>
              ) : null}
            </div>
            <div className="col-6">
              <h1 className="fw-bold text-end">
                Precio:{" "}
                <span>
                  {" "}
                  $
                  {!details.price ? " " : details.price.toLocaleString("en-US")}
                </span>
              </h1>
            </div>
          </div>
          <div className="cardDetalle gap-3">
            <div className="my-4 base2">
              <h2>
                Description:{" "}
                <span className="fs-4"> "(Inglés)" {details.description}</span>
              </h2>
            </div>
            <div className="base4">
              <h2>
                Volumen cada 24h:{" "}
                <span>
                  $
                  {!details.volume_24h
                    ? " "
                    : details.volume_24h.toLocaleString("en-US")}
                </span>
              </h2>
            </div>
            <div className="base3">
              <h2>
                Volumen de cambio cada 24h:{" "}
                {!details.volume_change_24h ? (
                  " "
                ) : details.volume_change_24h > 0 ? (
                  <span className="text-success">
                    {details.volume_change_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="text-danger">
                    {details.volume_change_24h.toFixed(2)}%
                  </span>
                )}
              </h2>
            </div>
            <h2 className="text-center m-4">Cambio porcentual</h2>
            <div className="row d-flex align-items-center border-cell">
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
            <div className="row d-flex align-items-center  border-cell mb-3">
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_1h ? (
                    " "
                  ) : details.percent_change_1h > 0 ? (
                    <span className="text-success">
                      {details.percent_change_1h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_1h.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_24h ? (
                    " "
                  ) : details.percent_change_24h > 0 ? (
                    <span className="text-success">
                      {details.percent_change_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_24h.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_7d ? (
                    " "
                  ) : details.percent_change_7d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_7d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_7d.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_30d ? (
                    " "
                  ) : details.percent_change_30d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_30d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_30d.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_60d ? (
                    " "
                  ) : details.percent_change_60d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_60d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_60d.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
              <div className="col-2 info-detail-cry">
                <h4>
                  {!details.percent_change_90d ? (
                    " "
                  ) : details.percent_change_90d > 0 ? (
                    <span className="text-success">
                      {details.percent_change_90d.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-danger">
                      {details.percent_change_90d.toFixed(2)}%
                    </span>
                  )}
                </h4>
              </div>
            </div>
            <Line data={data} options={options} />
            <h2 className="text-center m-4">Categorías</h2>
            <div className="d-flex align-items-center justify-content-center flex-wrap mb-2">
              {details.tag_names.length ? (
                details.tag_names.map((tag, index) => {
                  return (
                    <div className="d-flex  " key={index}>
                      <h4 className={"bg_categori bg" + index}>{tag}</h4>
                    </div>
                  );
                })
              ) : (
                <h4>No hay categorías</h4>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-5">
          <img src={load} alt="loading" height="200" className="my-5" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CryptoDetail;
