const nodemailer = require('nodemailer')
const nodemailerSendgrid = require ('nodemailer-sendgrid')
require("dotenv").config();
const {API_KEY_SENDGRID} = process.env

import {emailCambioDatos} from "./Plantillas/cambioDatos"

const createTrans = () => {
    // let transport = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "923cfd5b23d692",
    //       pass: "6db9bb26e7219a"
    //     }
    //   });
    
    const transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: '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',
        })
    )
    return transport;
}

const sendMailUpd = async (user:any)=> {
    const transporter= createTrans()
    let info = await transporter.sendMail({
    from: '"Coin Plus" <coinplusapp@gmail.com>', // quien envia el mail
    to: `${user.email}`, 
    // en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
    subject: `${user.name} tus datos se han actualizado`, // Asunto
    text: "Email de prueba de Coin+", // si enviamos un texto plano
    html: emailCambioDatos, // si enviamos un html como template
    });

    console.log ("Mensaje enviado:", info.messageId?info.messageId:"Se envio con sendgrid")
    return
}

exports.sendMail = (user:any) => sendMailUpd(user)
