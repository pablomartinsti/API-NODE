// src/routes/index.ts
import { Router } from 'express';

import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import companyRoutes from './company.routes';
import companyAccountantRoutes from './companyAccountant.routes';
import obligationRoutes from './obligation.routes';
import documentRoutes from './document.routes';

import { auth } from '../middlewares/auth';

const router = Router();

// 🌐 ROTAS PÚBLICAS
router.use('/', authRoutes);

// 🔐 TUDO ABAIXO EXIGE TOKEN
router.use(auth);

router.use('/users', userRoutes);
router.use('/companies', companyRoutes);
router.use('/company-accountants', companyAccountantRoutes);
router.use('/obligations', obligationRoutes);
router.use('/documents', documentRoutes);

export default router;
