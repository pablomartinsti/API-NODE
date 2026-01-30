import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function linkAccountant(req: Request, res: Response) {
  const { companyId, accountantId } = req.body;

  const link = await prisma.companyAccountant.create({
    data: {
      companyId,
      accountantId
    }
  });

  return res.status(201).json(link);
}

export async function unlinkAccountant(req: Request, res: Response) {
  const id = String(req.params.id);

  await prisma.companyAccountant.delete({
    where: { id }
  });

  return res.status(204).send();
}
