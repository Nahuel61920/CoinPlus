import { Router } from 'express';
import {getAllCryptos} from '../controllers/controller_getAllCryptos'

const router = Router();

router.get( '/' , getAllCryptos)

export = router;