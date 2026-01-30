// src/routes/index.ts
import { Router } from 'express';
import userRoutes from './user.routes';
import companyRoutes from './company.routes';
import companyAccountantRoutes from './companyAccountant.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/companies', companyRoutes);
router.use('/company-accountants', companyAccountantRoutes);

export default router;
