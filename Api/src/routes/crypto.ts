import { Router } from 'express';
import * as cryptoControllers from '../controllers/controllerCrypto'

const router = Router();

router.get( '/test' , cryptoControllers.testCrypto)
router.get( '/:id' , cryptoControllers.getCryptoByID)
router.get( '/' , cryptoControllers.getCryptos)
router.post( '/' , cryptoControllers.postCrypto)


export = router;