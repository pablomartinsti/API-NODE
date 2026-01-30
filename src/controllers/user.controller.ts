// controllers/user.controller.ts
import { Request, Response } from 'express';
import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(req: Request, res: Response) {
  const { name, email, password, role } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      role: role as UserRole
    },
    select: { id: true, name: true, email: true, role: true }
  });

  return res.status(201).json(user);
}
