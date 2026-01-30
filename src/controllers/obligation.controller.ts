import { Request, Response } from 'express';
import { PrismaClient, ObligationFrequency } from '@prisma/client';

const prisma = new PrismaClient();

export async function createObligation(req: Request, res: Response) {
  const { companyId, areaId, title, dueDay, frequency, mandatory } = req.body;

  const obligation = await prisma.obligation.create({
    data: {
      companyId,
      areaId,
      title,
      dueDay,
      frequency: frequency as ObligationFrequency,
      mandatory
    }
  });

  return res.status(201).json(obligation);
}

export async function listObligationsByCompany(req: Request, res: Response) {
  const companyId = String(req.params.companyId);

  const obligations = await prisma.obligation.findMany({
    where: { companyId },
    include: { area: true }
  });

  return res.json(obligations);
}
