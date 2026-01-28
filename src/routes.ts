import { Router } from 'express';
import { prisma } from './prisma';

const routes = Router();

routes.post('/users', async (req, res) => {
  const { name, email } = req.body;

  const user = await prisma.user.create({
    data: { name, email }
  });

  res.json(user);
});

routes.get('/users', async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default routes;
