import { Router } from 'express';
import { authorize } from '../middlewares/authorize';
import { checkCompanyAccess } from '../middlewares/companyAccess';

import { createCompany, listCompanies, updateCompanyTaxInfo } from '../controllers/company.controller';

const router = Router();

// cliente cria empresa
router.post('/', authorize('CLIENTE'), createCompany);

// contador só altera empresa vinculada
router.patch('/:id/tax', authorize('CONTADOR'), checkCompanyAccess, updateCompanyTaxInfo);

// todos veem — mas só as permitidas
router.get('/', authorize('ADMIN', 'CLIENTE', 'CONTADOR'), listCompanies);

export default router;
