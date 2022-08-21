import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailCrypto } from "../../redux/reducers/cryptoRed";

function CryptoDetail() {
  const { id } = useParams();
  const { details } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCrypto(id));
  }, [dispatch, id]);

  return (
    <div className="paginado2">
      <div>
        <img className="imagdetalle" src={details.logo} alt={details.id} />
      </div>
      <div className="cardDetalle">
        <div>
          <h1>
            {details.name} <span>{details.symbol}</span>
          </h1>
        </div>
        <div className="base3">
          <h1>
            Price:
            {details.price}
          </h1>
        </div>
        <div className="base3">
          <h2>Description: {details.description}</h2>
        </div>
        <div className="base3">
          <h2>24%: {details.volume_change_24h}</h2>
        </div>
      </div>
    </div>
  );
}

export default CryptoDetail;
