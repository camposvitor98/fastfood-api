import { Router } from "express";
import { IngredientsControllers } from "../modules/Ingredients/controllers";
const routes = Router();

const ingredientsControllers = new IngredientsControllers();

routes.get(`/ingredients`, ingredientsControllers.getAllIngredients);

export { routes };
