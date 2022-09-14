import {Request, Response} from "express"
import axios from "axios";
require("dotenv").config();
const { PAYPAL_CLIENT, PAYPAL_SECRET, HOST2} = process.env 


export const createOrder = async (req:Request, res:Response) => {
  const {dolariki}= req.query
    try {
        const order = {
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                // value: "llamar a operacion",
                value: dolariki
              },
              description: "Compra de Criptomoneda"
            },
          ],
          application_context: {
            brand_name: "CoinPlus",
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: `https://coinplus-backend.herokuapp.com/capture-order`,
            cancel_url: `https://coinplus-backend.herokuapp.com/cancel-order`,
          },
        };

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");

    
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: `${PAYPAL_CLIENT}`,
          password: `${PAYPAL_SECRET}`,
        },
      }
    );
        console.log(access_token)

     const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", order, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                // Authorization: `Bearer A21AAJagUs1imx554lpd2G8qZ90mw92sMV-6p9aHYNQJzJyS2y6HVCtewFzclvMIqmduuBWk5ysBQklmB6NYOex91fNpnKbog `
                }
        })
           // console.log(response.data)
        
            return res.send(response.data);
        
}catch(error:any){
    console.log(error.message);
    return res.status(500).json("Something goes wrong");
}
};






export const captureOrder = async (req:Request, res:Response) => {
    const { token } = req.query;
    const { usuarios } = req.query;

  try {
    const response = await axios.post(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
            username: `${PAYPAL_CLIENT}`,
            password: `${PAYPAL_SECRET}`,
          },
      }
    );

    console.log(response.data);

    res.redirect("https://coin-plus.vercel.app/pagado");
   
  } catch (error:any) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};



export const cancelOrder = (req:Request, res:Response) => {
    res.redirect("/user");
    
}