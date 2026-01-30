import { Request, Response } from 'express';
import { PrismaClient, DocumentStatus } from '@prisma/client';

const prisma = new PrismaClient();

export async function createPendingDocument(req: Request, res: Response) {
  console.log('BODY:', req.body);
  console.log('USER:', req.user);

  const { companyId, obligationId, referenceMonth } = req.body;

  const doc = await prisma.document.create({
    data: {
      companyId,
      obligationId,
      referenceMonth,
      fileUrl: '',
      status: DocumentStatus.PENDENTE,
      sentById: req.user.id
    }
  });

  return res.status(201).json(doc);
}

export async function uploadDocument(req: Request, res: Response) {
  const id = String(req.params.id);
  const { fileUrl } = req.body;

  const doc = await prisma.document.update({
    where: { id },
    data: {
      fileUrl,
      status: DocumentStatus.ENVIADO,
      sentById: req.user.id
    }
  });

  return res.json(doc);
}

export async function approveDocument(req: Request, res: Response) {
  const id = String(req.params.id);

  const doc = await prisma.document.update({
    where: { id },
    data: {
      status: DocumentStatus.APROVADO,
      validatedById: req.user.id,
      validatedAt: new Date()
    }
  });

  return res.json(doc);
}

export async function rejectDocument(req: Request, res: Response) {
  const id = String(req.params.id);

  const doc = await prisma.document.update({
    where: { id },
    data: {
      status: DocumentStatus.REJEITADO,
      validatedById: req.user.id,
      validatedAt: new Date()
    }
  });

  return res.json(doc);
}

export async function listDocumentsByCompany(req: Request, res: Response) {
  const companyId = String(req.params.companyId);

  const docs = await prisma.document.findMany({
    where: { companyId },
    include: { obligation: true },
    orderBy: { createdAt: 'desc' }
  });

  return res.json(docs);
}
