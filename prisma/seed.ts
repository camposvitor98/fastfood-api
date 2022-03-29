import { prisma } from "../src/infra/server";
type Ingredient = {
  label: string;
};

type Data = {
  data: Ingredient[];
};

const breads: Data = { data: [{ label: "initial Data" }] };

const meats: Data = { data: [{ label: "initial Data" }] };

const salads: Data = { data: [{ label: "initial Data" }] };

const sauces: Data = { data: [{ label: "initial Data" }] };

const ingredients: Data = { data: [{ label: "initial Data" }] };

async function main() {
  console.log(`Start seeding ...`);
  await prisma.breads.createMany(breads);

  await prisma.meats.createMany(meats);

  await prisma.salads.createMany(salads);

  await prisma.sauces.createMany(sauces);

  await prisma.ingredients.createMany(ingredients);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
