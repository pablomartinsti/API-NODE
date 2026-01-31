import { Router } from 'express';
import { createUser } from '../controllers/user.controller';
import { authorize } from '../middlewares/authorize';

const router = Router();

// admin cria contador e admin
router.post('/', authorize('ADMIN'), createUser);

export default router;
