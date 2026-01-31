import { Router } from 'express';
import { linkAccountant, unlinkAccountant } from '../controllers/companyAccountant.controller';
import { authorize } from '../middlewares/authorize';

const router = Router();

router.post('/', authorize('ADMIN'), linkAccountant);
router.delete('/:id', authorize('ADMIN'), unlinkAccountant);

export default router;
