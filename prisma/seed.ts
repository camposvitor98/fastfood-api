import { prisma } from "./prismaClient";

async function main() {
  console.log(`Start seeding ...`);

  await prisma.ingredients.createMany({
    data: [
      {
        name: "Bife de picanha 100g",
        ingredientCategory: "meats",
        quantity: 60,
        price: 5.6,
        description:
          "Uma deliciosa carne de hamburger, 100% artesanal e 100% picanha. Temperada com sal de parrilha e pimenta do reino ",
      },
      {
        name: "Fatias de bacon 70g",
        ingredientCategory: "complements",
        quantity: 60,
        price: 3.6,
        description: "Fatias super crocantes de bacon",
      },
      {
        name: "Alface",
        ingredientCategory: "salads",
        quantity: 60,
        price: 1,
        description: "Uma porção de alface sempre fresquinho",
      },
      {
        name: "Molho especial 50ml",
        ingredientCategory: "sauces",
        quantity: 60,
        price: 1.5,
        description: "Nosso molho a base de mostarda e picles",
      },
    ],
  });

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
