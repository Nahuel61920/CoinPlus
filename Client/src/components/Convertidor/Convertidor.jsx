import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from '../../redux/reducers/cryptoRed';
import { getCryptoPrice } from "../../redux/reducers/cryptoRed";




export default function Convertidor() {

  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchCrypto())
  },[])

  const { cryptos, cryptoPrice } = useSelector(
      (state) => state.crypto
    );

  //Set the current crypto name
  const [currentCrypto,setCurrentCrypto] = useState("");
  const [currentTrade,setCurrentTrade] = useState(
  {
    dolar : "",
    crypto : "",
  });
  
  function convert(inCoin,amount){
    if(inCoin==="dolar"){
      return(amount/cryptoPrice[0].price)
    }
    else{
      return(amount*cryptoPrice[0].price)
    }

  }

  function handleCryptoName(e) {
      dispatch(getCryptoPrice(e.target.value));
      console.log(e);
      setCurrentCrypto(e.target.value)
    }

  function handleExchange(e) {
    setCurrentTrade({
      [e.target.name!=="dolar"?"crypto":"dolar"] : e.target.value,
      [e.target.name==="dolar"?"crypto":"dolar"] : convert("dolar",e.target.value),
  })
  }

  function handleUpdate(e) {
    setCurrentTrade({
      "dolar":currentTrade.dolar,
      "crypto" : convert("dolar",currentTrade.dolar),
  })
  }

  return (
    <div>
      
      <select
        defaultValue="Category"
        className="name-filt col-5  m-3 animate__animated animate__bounceInLeft animate__delay-1s"
        onChange={(e) => {handleCryptoName(e);handleUpdate(e)}}
        
      >
        <option value="All">Escoja su Criptomoneda</option>
        {cryptos.map((c) => (
          <option value={c.name}>{c.name}</option>
        ))}
      </select>
        <input type="text" value={cryptoPrice.length ? "$ "+cryptoPrice[0].price.toString().slice(0,7) : 0} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" />
      <div>
        <p>$</p>
        <input type="text" name="dolar"  className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s"
          placeholder="Ingrese monto a convertir..." onChange = {handleExchange} value={currentTrade.dolar}>
        </input> 
      </div> 
      <div>
        <p>{currentCrypto}</p>
        <input type="text" name="crypto" value={currentTrade.crypto} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" 
          onChange = {handleExchange}>
        </input> 
      </div>  
    </div>
  )
}
