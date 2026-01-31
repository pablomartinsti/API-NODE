import { Router } from 'express';
import { createObligation, listObligationsByCompany } from '../controllers/obligation.controller';

import { authorize } from '../middlewares/authorize';
import { checkCompanyAccess } from '../middlewares/companyAccess';

const router = Router();

// só contador cria obrigação — e só na empresa vinculada
router.post('/', authorize('CONTADOR'), checkCompanyAccess, createObligation);

// todos podem ver — mas só da empresa permitida
router.get(
  '/company/:companyId',
  authorize('ADMIN', 'CONTADOR', 'CLIENTE'),
  checkCompanyAccess,
  listObligationsByCompany
);

export default router;
