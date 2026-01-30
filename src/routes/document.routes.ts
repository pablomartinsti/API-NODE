import { Router } from 'express';
import {
  createPendingDocument,
  uploadDocument,
  approveDocument,
  rejectDocument,
  listDocumentsByCompany
} from '../controllers/document.controller';

const router = Router();

router.post('/pending', createPendingDocument);
router.patch('/:id/upload', uploadDocument);
router.patch('/:id/approve', approveDocument);
router.patch('/:id/reject', rejectDocument);
router.get('/company/:companyId', listDocumentsByCompany);

export default router;
