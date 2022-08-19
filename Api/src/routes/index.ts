import { Router } from "express";
const router = Router();
const  getAllCryptos = require ("./getAllCryptos")
const getAllDetail= require("./getAllDetail")

router.use("/market", getAllCryptos)
router.use("/detail", getAllDetail)
router.use("/", (req, res)=> res.send("COIN+, EL BACK YA FUNCIONA :)"))

export = router