import { RequestHandler } from "express";
import { CategoriesModel } from "../schemas/Categories";

const axios = require ('axios');

export const getAllCategory:RequestHandler = async (req,res) => {
  
  const categories = await CategoriesModel.find({},{_id:0,__v:0});

  res.status(200).send(categories)

}
//Solo ejecutar para insertar los datos en la BD
export const postCategory:RequestHandler = async (req,res) => {

  const categoryData = await getCategory();

  const saved = await CategoriesModel.insertMany(categoryData)
  // const saved = await cate.save();

  res.status(200).json(saved)
  
}

export const testCategory:RequestHandler =  (req,res) => {
  
  res.status(200).send("category")

}

const getCategory= async  ()=> {
  try {

  let response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories', {
    headers: {
      'X-CMC_PRO_API_KEY': 'af01c4a7-d62b-45a2-9afd-bf9ed61d6eaf',
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