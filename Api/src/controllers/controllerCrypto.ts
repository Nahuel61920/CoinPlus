import { RequestHandler } from "express";
const axios = require ('axios');

const API_KEY ="af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf"

import {CryptoModel} from "../schemas/Crypto";

export const getCryptos:RequestHandler = async (req,res) => {
  
    const crypto = await getAPI01();
    
    res.status(200).send(crypto)

}


export const getCryptoByID:RequestHandler = async (req,res) => {
    const {id} = req.params

    const crypto = await getAPI01();
    const cryptoInfo = await getAPI02(Number(id));
    const cryptoFiltrado = await crypto.filter((c:any) => c.id === Number(id))
    res.status(200).send({...cryptoFiltrado[0],...cryptoInfo})

}
// En caso se necesite guardar en la BD
export const postCrypto:RequestHandler = async (req,res) => {
    const crypto = new CryptoModel(req.body)
    const saved = await crypto.save();

    res.status(200).json(saved)
    
}

export const testCrypto:RequestHandler =  (req,res) => {
  
    res.status(200).send("crypto")

}

//API DATA

const getAPI01 = async () => {

    try{
        const infoAPI = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': 'af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf',
        },
        params : {
            'start': '1',
            'limit': '2',
            'convert': 'USD'
        }
        }) 

        const info = infoAPI.data.data.map ( (c: any ) => { // cambiar el type de "C" A <Crypto>
        //console.log("c.quote.USD= ", c.quote.USD) 
        return {
            id: c.id,
            name: c.name,
            symbol: c.symbol,
            price: c.quote.USD.price,
            volume_24h: c.quote.USD.volume_24h,
            volume_change_24h: c.quote.USD.volume_change_24h,
            percent_change_1h: c.quote.USD.percent_change_1h,
            percent_change_24h: c.quote.USD.percent_change_24h,
            percent_change_7d: c.quote.USD.percent_change_7d,
            percent_change_30d: c.quote.USD.percent_change_30d,
            percent_change_60d: c.quote.USD.percent_change_60d,
            percent_change_90d: c.quote.USD.percent_change_90d,
        }})
        return info
    }
    catch(error){
        console.log(error)
    }
}

const getAPI02 = async (id:number) => {

    try{
        const infoAPI = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info', {
            headers: {
              'X-CMC_PRO_API_KEY': 'af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf',
            },
            params : {
              'id': id
            }
          }) 
        
        const info = {
            // id: infoAPI.data.data[id].id,
            description: infoAPI.data.data[id].description,
            logo: infoAPI.data.data[id].logo,
            tag_names: infoAPI.data.data[id]["tag-names"],
        }
        return info
    }
    catch(error){
        console.log(error)
    }
}