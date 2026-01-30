import { Router } from 'express';
import { createObligation, listObligationsByCompany } from '../controllers/obligation.controller';

const router = Router();

router.post('/', createObligation); // contador cria
router.get('/company/:companyId', listObligationsByCompany);

export default router;
