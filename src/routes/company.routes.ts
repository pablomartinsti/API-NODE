// src/routes/company.routes.ts
import { Router } from 'express';
import { createCompany, listCompanies, updateCompanyTaxInfo } from '../controllers/company.controller';

const router = Router();

router.post('/', createCompany);
router.get('/', listCompanies);
router.patch('/:id/tax', updateCompanyTaxInfo);

export default router;
