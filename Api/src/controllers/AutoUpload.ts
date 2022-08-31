import { getAPI01 } from '../controllers/controllerCrypto'
import {CryptoModel} from "../schemas/Crypto";



const autoUpload:any = async() => {
    try{
    const dataDelete = await CryptoModel.deleteMany()
    const cryptoData01 = await getAPI01(1,5000);
    const cryptoData02 = await getAPI01(5001,4660);
    const cryptoData = cryptoData01.concat(cryptoData02)
    const saved = await CryptoModel.insertMany(cryptoData)

    const mostrar = await CryptoModel.find({id:1})

    console.log("------->  ",new Date(),"--->", mostrar[0].price)
    }
    catch(err){
    console.log("---->  ",err)
    }
}

// const titulo:any = ()=>{console.log("------------------TIME---------------------------PRICE---------------")}

// setTimeout(titulo,10*1000)

// setInterval(autoUpload,61*1000)