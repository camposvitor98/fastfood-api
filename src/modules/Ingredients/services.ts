import { IngredientsRepository } from "./repository";

const ingredientsRepository = new IngredientsRepository();
class IngredientsServices {
  getAllIngredients = async () => {
    return await ingredientsRepository.findMany();
  };
}

export { IngredientsServices };
