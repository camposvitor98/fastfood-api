import { Request, Response } from "express";
import { IngredientsServices } from "./services";

const ingredientsServices = new IngredientsServices();

class IngredientsControllers {
  getIngredients = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await ingredientsServices.getAllIngredients();
      return res.json(result);
    } catch (err: any) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };
}

export { IngredientsControllers };
