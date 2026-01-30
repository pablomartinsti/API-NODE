// routes/user.routes.ts
import { Router } from 'express';
import { createUser } from '../src/controllers/user.controller';

const router = Router();

router.post('/', createUser);

export default router;
