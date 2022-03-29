import { Prisma } from "@prisma/client";
import { prisma } from "../../infra/server";

type Ingredient = {
  id: string;
};

class IngredientsServices {
  getAllIngredients = async () => {
    const breads = await prisma.breads.findMany();

    const meats = await prisma.meats.findMany();

    const salads = await prisma.salads.findMany();

    const sauces = await prisma.sauces.findMany();

    const ingredients = await prisma.ingredients.findMany();

    return { breads, meats, salads, sauces, ingredients };
  };
}

export { IngredientsServices };
