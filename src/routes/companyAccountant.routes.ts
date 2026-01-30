import { Router } from 'express';
import { linkAccountant, unlinkAccountant } from '../controllers/companyAccountant.controller';

const router = Router();

router.post('/', linkAccountant); // ADMIN cria vínculo
router.delete('/:id', unlinkAccountant); // ADMIN remove vínculo

export default router;
