import { prisma } from "../../infra/server";
import { IngredientsRepository } from "./repository";

type Ingredient = {
  id: string;
};
const ingredientsRepository = new IngredientsRepository();
class IngredientsServices {
  getAllIngredients = async () => {
    const breads = await ingredientsRepository.findMany();

    const meats = await prisma.meats.findMany();

    const salads = await prisma.salads.findMany();

    const sauces = await prisma.sauces.findMany();

    const ingredients = await prisma.ingredients.findMany();

    return { breads, meats, salads, sauces, ingredients };
  };
}

export { IngredientsServices };
