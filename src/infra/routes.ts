import { Router } from "express";
import { IngredientsControllers } from "../modules/Ingredients/controllers";
const routes = Router();

const ingredientsControllers = new IngredientsControllers();

routes.get(`/`, () => "Server running");
routes.get(`/ingredients`, ingredientsControllers.getIngredients);

export { routes };
