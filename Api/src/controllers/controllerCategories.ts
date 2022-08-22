import { RequestHandler } from "express";
import { CategoriesModel } from "../schemas/Categories";

const axios = require ('axios');

export const getAllCategory:RequestHandler = async (req,res) => {
  
  try {
    const categories = await CategoriesModel.find({},{_id:0,__v:0});
    res.status(200).send(categories)
  } catch (error) {
    res.status(404).send(error)
  }
  

}
//Solo ejecutar para insertar los datos en la BD
export const postCategory:RequestHandler = async (req,res) => {
  try {
    const categoryData = await getCategory();

    const saved = await CategoriesModel.insertMany(categoryData)
    // const saved = await cate.save();

    res.status(200).json(saved)
  } catch (error) {
    
  }
  
  
}

export const testCategory:RequestHandler =  (req,res) => {
  
  res.status(200).send("category")

}

const getCategory= async  ()=> {
  try {

    let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
      headers: {
        'X-CMC_PRO_API_KEY': 'ea824a0d-431a-48ec-8e80-abdf4dcf9c30',
      },
    
    })

    const category = await response.data.data.map ( (c: any ) => { 
      return({name: c.name})
    })
    return category

  } 
  catch (err: string | any) {
    console.log(err.message);
  }
  
}