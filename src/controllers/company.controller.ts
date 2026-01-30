// src/controllers/company.controller.ts
import { Request, Response } from 'express';
import { PrismaClient, TaxRegime, ActivityType } from '@prisma/client';

const prisma = new PrismaClient();

export async function createCompany(req: Request, res: Response) {
  const { razaoSocial, nomeFantasia, cnpj, ownerId } = req.body;

  const company = await prisma.company.create({
    data: {
      razaoSocial,
      nomeFantasia,
      cnpj,
      ownerId
    }
  });

  return res.status(201).json(company);
}

export async function listCompanies(req: Request, res: Response) {
  const { userId, role } = req.query as any;

  if (role === 'CLIENTE') {
    const companies = await prisma.company.findMany({
      where: { ownerId: userId }
    });
    return res.json(companies);
  }

  if (role === 'CONTADOR') {
    const companies = await prisma.company.findMany({
      where: {
        accountantLinks: {
          some: { accountantId: userId, active: true }
        }
      }
    });
    return res.json(companies);
  }

  const companies = await prisma.company.findMany();
  return res.json(companies);
}

export async function updateCompanyTaxInfo(req: Request, res: Response) {
  const id = String(req.params.id);
  const { taxRegime, activityType } = req.body;

  const company = await prisma.company.update({
    where: { id },
    data: {
      taxRegime,
      activityType
    }
  });

  return res.json(company);
}
