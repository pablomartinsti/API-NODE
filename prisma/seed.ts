import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // ===== ÁREAS FIXAS =====
  const areas = ['Fiscal', 'Contábil', 'Pessoal', 'Legalização'];

  for (const name of areas) {
    await prisma.area.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  // ===== ADMIN MASTER =====
  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPassword = process.env.ADMIN_PASSWORD!;

  const hash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: 'Administrador',
      email: adminEmail,
      password: hash,
      role: UserRole.ADMIN
    }
  });

  console.log('Áreas e admin criados com sucesso');
}

main()
  .catch(console.error)
  .finally(async () => prisma.$disconnect());
