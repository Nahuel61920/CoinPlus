import { Router } from "express";
import {createOrder, captureOrder, cancelOrder} from "../controllers/controller_payments";
  


const router = Router();

router.post("/create-order", createOrder);

router.get("/capture-order", captureOrder);

router.get("/cancel-order", cancelOrder);

export = router;