import { Router } from 'express';
import * as userControllers from '../controllers/controllerUser'

const router = Router();

router.get( '/test' , userControllers.testUser)
router.get( '/:id' , userControllers.getUsers)
router.post( '/transaction' , userControllers.postTransfer)
router.get( '/' , userControllers.getUsers)
router.post( '/' , userControllers.postUser)
router.put("/", userControllers.updateUser)


export = router;