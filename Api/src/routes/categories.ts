import { Router } from 'express';
import * as categoryControllers from '../controllers/controllerCategories'

const router = Router();

router.get( '/test' , categoryControllers.testCategory)
router.get( '/' , categoryControllers.getAllCategory)
// Solo para cargar los datos
router.post( '/' , categoryControllers.postCategory)
export = router;