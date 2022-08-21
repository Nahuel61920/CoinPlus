import { RequestHandler } from "express";
const axios = require ('axios');

const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.join(__dirname, '/updater/coinList.json'))
let coinList = JSON.parse(rawdata);

const API_KEY ="ea824a0d-431a-48ec-8e80-abdf4dcf9c30"

import {CryptoModel} from "../schemas/Crypto";

export const getCryptos:RequestHandler = async (req,res) => {
    const  name  =req.query.name?.toString()
    
    const crypto = await CryptoModel.find({},{_id:0,__v:0});

    try{
        if(name){
        const cryptosFiltrados = crypto.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))

        cryptosFiltrados.length>0?res.status(200).send(cryptosFiltrados):res.status(404).send(`Cryptos with the word ${name} were not found. Would you like to try another?`)

        }
        else{
        res.status(200).send(crypto)
        }
    }
    catch(error){
        res.status(404).send(error)
    }

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
    const min_changed = min?min:0
    const max_changed = max?max:Infinity

    const tag_names_changed =tag_names?.toString().toLowerCase().split(" ").join("-")

    if(tag_names){
        const crypto = await CryptoModel.find(
        {   
            price:{$gte:min_changed,$lte:max_changed},
            tag_names:{$elemMatch:{$eq:tag_names_changed}}
        },{_id:0,__v:0})
        res.status(200).send(crypto)   
    }
    else{
        const crypto = await CryptoModel.find(
        {   
            price:{$gte:min_changed,$lte:max_changed}
        },{_id:0,__v:0})
        res.status(200).send(crypto)
    }
}


// En caso se necesite guardar en la BD
export const postCrypto:RequestHandler = async (req,res) => {
    const cryptoData01 = await getAPI01(1,5000);
    const cryptoData02 = await getAPI01(5001,4660);
    const cryptoData = cryptoData01.concat(cryptoData02)
    const saved = await CryptoModel.insertMany(cryptoData)
    res.status(200).json(saved) 


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


    // for(let i=5;i<15;i++){
    // let loquesea03 =coinList.slice(10*i,10*i+9)
    // await(new Promise(resolve => setTimeout(()=>resolve(
    // loquesea03.map(async (c:any) => {
    //     let b = await getAPI02(c.id)
    //     let crypto = await CryptoModel.findOneAndUpdate({id:c.id},b)
    // })),10*1000
    // )))
    // console.log("------------>"+i)
    // console.log(loquesea03)
    // }

    // const baco= [
    //     {"id": 1},{"id": 1027},{"id": 825},{"id": 3408},{"id": 1839},{"id": 4687}]

    // for(let i=0;i<5;i++){
    //     await(new Promise(resolve => setTimeout(()=>resolve(
    //     async ()=>{
    //         let b = await getAPI02(baco[i].id)
    //         let crypto = await CryptoModel.findOneAndUpdate({id:baco[i].id},b)
    //      }),4*1000
    //     )))
    //     console.log("-------->"+baco[i].id)
    //     console.log("------------>"+i)
    //     }


    // const cryptoComplete = await CryptoModel.find()

    // res.status(200).json(cryptoComplete)
}

export const testCrypto:RequestHandler = async (req,res) => {
    const gato = "Dingo"
    // const liebre ="liebre"
    // const liebre = setTimeout(()=>gato,2*1000)
    for(let i=0;i<3;i++){
    const liebre = await (new Promise(resolve => setTimeout(()=>resolve(gato),2*1000)))
    console.log(liebre)    
    }

    
    
    res.status(200).send("liebre")






}

//API DATA

export const getAPI01 = async (start:Number,limit:Number) => {

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
            tag_names: c. tags,
        }})
        return info
    }
    catch(error){
        console.log(error)
    }
}

export const getAPI02 = async (id:number) => {

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
            // tag_names: infoAPI.data.data[id]["tag-names"],
            tag_groups: infoAPI.data.data[id]["tag-groups"],
        }
        return info
    }
    catch(error){
        console.log(error)
    }
}