import { Router } from 'express';
import {
  createPendingDocument,
  uploadDocument,
  approveDocument,
  rejectDocument,
  listDocumentsByCompany
} from '../controllers/document.controller';

import { authorize } from '../middlewares/authorize';
import { checkCompanyAccess } from '../middlewares/companyAccess';

const router = Router();

// cria pendência (envolve empresa)
router.post('/pending', authorize('CLIENTE', 'CONTADOR'), checkCompanyAccess, createPendingDocument);

// upload do documento
router.patch('/:id/upload', authorize('CLIENTE', 'CONTADOR'), checkCompanyAccess, uploadDocument);

// contador valida
router.patch('/:id/approve', authorize('CONTADOR'), checkCompanyAccess, approveDocument);

router.patch('/:id/reject', authorize('CONTADOR'), checkCompanyAccess, rejectDocument);

// listar por empresa
router.get(
  '/company/:companyId',
  authorize('ADMIN', 'CONTADOR', 'CLIENTE'),
  checkCompanyAccess,
  listDocumentsByCompany
);

export default router;
