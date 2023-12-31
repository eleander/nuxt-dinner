import { defineStore } from "pinia";
import { ReducedDishDetails } from "types";

export const useMyDinnerStore = defineStore("dinner", () => {
  const numberOfGuests = ref(1);
  const dishes = ref([] as ReducedDishDetails[]);

  function setNumberOfGuests(newNumberOfGuests: number) {
    if (newNumberOfGuests == numberOfGuests.value) return;
    if (Number.isInteger(newNumberOfGuests) && newNumberOfGuests > 0)
      numberOfGuests.value = newNumberOfGuests;
  }

  function addToMenu(dishToAdd: ReducedDishDetails) {
    dishes.value = [...dishes.value, dishToAdd];
  }

  function removeFromMenu(dishToRemove: number) {
    dishes.value = dishes.value.filter((d) => d.id !== dishToRemove);
  }
  return {
    numberOfGuests,
    dishes,
    setNumberOfGuests,
    addToMenu,
    removeFromMenu,
  };
});
