import { Request, Response } from "express";

const axios = require ('axios');

export const getAllDetail = async  (req: Request, res: Response)=> {
    
    try {
        let {id} = req.query
        
        let response = await (await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info', {
          headers: {
            'X-CMC_PRO_API_KEY': 'ea824a0d-431a-48ec-8e80-abdf4dcf9c30',
          },
          params : {
            'id': id
          }
        })).data.data
        //console.log("response= ",response)
        
        for (const property in response) {
            
            return res.json ({
                description: response[property].description,
                logo: response[property].logo,
                tag_names: response[property]["tag-names"],
                tag_groups: response[property]["tag-groups"],
            })
            
        }
     
    } catch (err: string | any) {
      res.status(400).json(err.message);
    }
}