import { Request, Response } from "express";
const axios = require ('axios');

export const getAllCryptos = async  (req: Request, res: Response)=> {
    try {
      let response = await (await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': 'af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf',
          },
          params : {
            'start': '1',
            'limit': '1000',
            'convert': 'USD'
          }
      })).data
     
     //console.log("response.data= ",response.data)
      const misCryptos = await response.data.map ( (c: any ) => { // cambiar el type de "C" A <Crypto>
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
          }
      })

      
      if (misCryptos) {
        res.json(misCryptos)
      } else {
        throw new Error("No se encuentran cryptos");
      }
    } catch (err: string | any) {
      res.status(400).json(`${err.message}`);
    }
  
    
}

