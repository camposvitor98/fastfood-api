import { IngredientsCategory } from "@prisma/client";
import { IngredientsServices } from "./services";

describe("Get all ingredients", () => {
  it("should return a list with all ingredients", async () => {
    const ingredientsServices = new IngredientsServices();
    const ingredients = await ingredientsServices.getAllIngredients();

    expect(Array.isArray(ingredients)).toBe(true);

    if (ingredients.length) {
      ingredients.forEach((ingredient) => {
        expect(ingredient).toHaveProperty("id");
        expect(ingredient).toHaveProperty("createdAt");
        expect(ingredient).toHaveProperty("updatedAt");
        expect(ingredient).toHaveProperty("name");
        expect(ingredient).toHaveProperty("quantity");
        expect(ingredient).toHaveProperty("ingredientCategory");

        const isValidCategory = Object.keys(IngredientsCategory).includes(
          ingredient.ingredientCategory
        );
        expect(isValidCategory).toBeTruthy();
      });
    } else {
      expect(ingredients.length).toBeFalsy();
    }
  });
});
