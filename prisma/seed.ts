import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const areas = ['Fiscal', 'Contábil', 'Pessoal', 'Legalização'];

  for (const name of areas) {
    await prisma.area.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  console.log('Áreas criadas com sucesso');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect());
