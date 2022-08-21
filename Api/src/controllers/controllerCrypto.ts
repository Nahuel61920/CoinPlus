import { RequestHandler } from "express";
const axios = require ('axios');

const API_KEY ="af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf"

import {CryptoModel} from "../schemas/Crypto";

export const getCryptos:RequestHandler = async (req,res) => {
  
    // const crypto = await getAPI01(1,5);
    const crypto = await CryptoModel.find({},{_id:0,__v:0});

    res.status(200).send(crypto)

}

export const getCryptoByID:RequestHandler = async (req,res) => {
    const {id} = req.params

    // const crypto = await getAPI01(1,500);
    // const cryptoFiltrado = await crypto.filter((c:any) => c.id === Number(id))[0]
    const cryptoInfo = await getAPI02(Number(id));

    const cryptoActualizado = await CryptoModel.findOneAndUpdate({id},cryptoInfo,{new: true})

    const cryptoFiltrado = await CryptoModel.findOne({id},{_id:0,__v:0})

    res.status(200).send(cryptoFiltrado)

}

export const getCryptoByQuery:RequestHandler = async (req,res) => {
    const { min,max,tag_names } = req.query
    const crypto = await CryptoModel.find(
        {   
            price:{$gte:min,$lte:max},
            tag_names:{$elemMatch:{$eq:tag_names}}
        },
        {_id:0,__v:0}
        )

    res.status(200).send(crypto)
}

// En caso se necesite guardar en la BD
export const postCrypto:RequestHandler = async (req,res) => {
    // const cryptoData01 = await getAPI01(1,5000);
    // const cryptoData02 = await getAPI01(5001,4660);
    // const cryptoData = cryptoData01.concat(cryptoData02)
    // const saved = await CryptoModel.insertMany(cryptoData)
    // res.status(200).json(saved) 


    // const cryptoUncomplete = await CryptoModel.find({},{id:1,_id:0})
    // const loquesea =cryptoUncomplete.slice(0,100)
    // loquesea.map(async (c) => {
    //     const b = await getAPI02(c.id)
    //     console.log(b)
    //     const crypto = await CryptoModel.findOneAndUpdate({id:c.id},b)
    // })

    // const loquesea02 =[1,1027,825]
    // loquesea02.map(async (c) => {
    //     const b = await getAPI02(c)
    //     console.log(b)
    //     const crypto = await CryptoModel.findOneAndUpdate({id:c},b)
    // })

    // const loquesea03 =[{id: 3408},{id:1839}]
    // loquesea03.map(async (c) => {
    //     const b = await getAPI02(c.id)
    //     const crypto = await CryptoModel.findOneAndUpdate({id:c.id},b)
    // })

    const cryptoComplete = await CryptoModel.find()

    res.status(200).json(cryptoComplete)
}

export const testCrypto:RequestHandler =  (req,res) => {
  
    res.status(200).send("crypto")

}

//API DATA

const getAPI01 = async (start:Number,limit:Number) => {

    try{
        const infoAPI = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': API_KEY,
        },
        params : {
            'start': start,
            'limit':limit,
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
              'X-CMC_PRO_API_KEY': API_KEY,
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
            tag_groups: infoAPI.data.data[id]["tag-groups"],
        }
        return info
    }
    catch(error){
        console.log(error)
    }
}