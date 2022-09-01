import { Router } from 'express';
import * as commentControllers from '../controllers/controllerComment'

const router = Router();


router.get( '/' , commentControllers.getComment)
router.post( '/' , commentControllers.postComment)

export = router;