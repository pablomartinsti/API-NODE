import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkCompanyAccess(req: Request, res: Response, next: NextFunction) {
  const user = req.user;

  let companyId =
    (Array.isArray(req.params.companyId) ? req.params.companyId[0] : req.params.companyId) || req.body.companyId;

  // fallback: rota por documento
  if (!companyId && req.params.id) {
    const documentId = Array.isArray(req.params.id) ? req.params.id[0] : String(req.params.id);

    const doc = await prisma.document.findUnique({
      where: { id: documentId },
      select: { companyId: true }
    });

    if (!doc) {
      return res.status(404).json({ error: 'Documento não encontrado' });
    }

    companyId = doc.companyId;
  }

  if (!companyId) return next();

  // ADMIN acessa tudo
  if (user.role === 'ADMIN') return next();

  // CLIENTE: dono da empresa
  if (user.role === 'CLIENTE') {
    const company = await prisma.company.findFirst({
      where: {
        id: companyId,
        ownerId: user.id
      }
    });

    if (!company) {
      return res.status(403).json({ error: 'Sem acesso à empresa' });
    }

    return next();
  }

  // CONTADOR: vínculo ativo
  if (user.role === 'CONTADOR') {
    const link = await prisma.companyAccountant.findFirst({
      where: {
        companyId,
        accountantId: user.id,
        active: true
      }
    });

    if (!link) {
      return res.status(403).json({ error: 'Empresa não vinculada' });
    }

    return next();
  }

  return res.status(403).json({ error: 'Acesso negado' });
}
