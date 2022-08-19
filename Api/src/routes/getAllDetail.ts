import { Router } from 'express';
import {getAllDetail} from '../controllers/controller_getAllDetail'

const router = Router();

router.get( '/' , getAllDetail)

export = router;