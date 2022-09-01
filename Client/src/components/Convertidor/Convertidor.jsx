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

    const [crypto, setCrypto] = useState(0);
    const [input, setInput] = useState();   
    const [res, setRes] =useState(); 

    function dolarACrypto (){
       
       let precio = cryptoPrice[0].price
       let valor = input
        console.log(precio, valor, "muestralo a mati")
       let resultado = valor*1/precio
       
       setRes(resultado) 
  
    }  

    console.log(res, "esto es res")

    function handleCryptoName(e) {
        dispatch(getCryptoPrice(e));
        console.log(e);
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
                <option value={c.name}>{c.name}</option>
              ))}
            </select>
           <input type="text" value={cryptoPrice.length ? "$ "+cryptoPrice[0].price.toString().slice(0,7) : 0} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" />
           
           <input type="text" value={input} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s"
            placeholder="Ingrese monto a convertir..." onChange = {(e) => {setInput(e.target.value); dolarACrypto(e.target.value)}}>
           </input>     
           
           <input type="text" value={res} className="col-5 m-3 animate__animated animate__bounceInLeft animate__delay-1s" />     
    </div>
  )
}
