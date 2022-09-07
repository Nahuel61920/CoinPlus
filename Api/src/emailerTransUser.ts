const nodemailer = require('nodemailer')
const nodemailerSendgrid = require ('nodemailer-sendgrid')
require("dotenv").config();
const {API_KEY_SENDGRID} = process.env

import {emailTransUser} from "./Plantillas/transUser"

const createTrans = () => {
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "bcb9ef4d7ade95",
          pass: "630c3b584d3057"
        }
      });
    
    // const transport = nodemailer.createTransport(
    //     nodemailerSendgrid({
    //         apiKey: API_KEY_SENDGRID,
    //     })
    // )
    return transport;
}

const sendTransUser = async (user:any)=> {
    const transporter= createTrans()
    let info = await transporter.sendMail({
    from: '"Coin Plus" <coinplusapp@gmail.com>', // quien envia el mail
    to: `${user.email}`, 
    // en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
    subject: `${user.name} Proceso de transacción en Coin+`, // Asunto
    text: "Email de prueba de transacción Coin+", // si enviamos un texto plano
    html: "", // si enviamos un html como template
    });

    console.log ("Mensaje enviado:", info.messageId?info.messageId:"Se envio con sendgrid")
    return
}

exports.sendMail = (user:any) => sendTransUser(user)
