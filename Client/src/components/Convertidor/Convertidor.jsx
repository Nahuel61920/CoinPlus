import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from '../../redux/reducers/cryptoRed';
import { getCryptoPrice } from "../../redux/reducers/cryptoRed";


function DolaraCrypto (precio, crypto){
    crypto = crypto.name
    precio = crypto.value
    input = input.value
    
    return crypto*input/precio

}

export default function Convertidor() {

    const { cryptos } = useSelector(
        (state) => state.crypto
      );

    const [crypto, setCrypto] = useState(0);   

      function handleCryptoName(e) {
        dispatch(getCryptoPrice);
        
      }

  return (
    <div>
        <select
              defaultValue="Category"
              className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
              onChange={(e) => handleCryptoName(e.target.value)}
            >
              <option value="All">Escoja su Criptomoneda</option>
              {cryptos.map((c) => (
                <option key={key} value={c.name}>{c.name}</option>
              ))}
            </select>
    </div>
  )
}
