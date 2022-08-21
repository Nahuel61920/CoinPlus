import { Router } from "express";
const router = Router();
const  getAllCryptos = require ("./getAllCryptos")
const getAllDetail= require("./getAllDetail")
const  userRoute = require ("./user")
const  cryptoRoute = require ("./crypto")
const getAllCategory = require ("./categories")


router.use("/crypto", cryptoRoute)
router.use("/profile", userRoute)
router.use("/market", getAllCryptos)
router.use("/detail", getAllDetail)
router.use("/category", getAllCategory)
router.use("/", (req, res)=> res.send("COIN+, EL BACK YA FUNCIONA :)"))

export = router