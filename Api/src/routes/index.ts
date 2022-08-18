import { Router } from "express";
const router = Router();
const  getAllCryptos = require ("./getAllCryptos")

router.use("/market", getAllCryptos)
router.use("/", (req, res)=> res.send("COIN+, EL BACK YA FUNCIONA :)"))

export = router