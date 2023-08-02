import { ExtendedIngredient, ReducedDishDetails } from "types";
export const useShoppingList = (dishes: ReducedDishDetails[]) => {
  function keepJustIngredientsCB(dish: ReducedDishDetails) {
    return dish.extendedIngredients;
  }
  const result: { [key: number]: ExtendedIngredient } = {}; // object used as mapping

  dishes.map(keepJustIngredientsCB).forEach((ingredients) => {
    ingredients.forEach((ingredient) => {
      if (result[ingredient.id]) {
        result[ingredient.id].amount += ingredient.amount;
      } else {
        result[ingredient.id] = ingredient;
      }
    });
  });

  return Object.values(result);
};

export const menuPrice = (dishes: ReducedDishDetails[]) => {
  function dishPriceCB(dish: ReducedDishDetails) {
    return dish.pricePerServing;
  }
  function sumReducerCB(acc: number, number: number) {
    return acc + number;
  }
  return dishes.map(dishPriceCB).reduce(sumReducerCB, 0);
};

export const dishType = (dishTypes: string[]) => {
  const knownDishTypes = ["starter", "main course", "dessert"];
  const result = dishTypes.filter((dishType) =>
    knownDishTypes.includes(dishType)
  );
  return result.length > 0 ? result[0] : "";
};
