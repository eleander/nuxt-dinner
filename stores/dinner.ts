import { defineStore } from "pinia";
import { ReducedDishDetails } from "@/types/index";

export const useMyDinnerStore = defineStore("dinner", () => {
  const numberOfGuests = ref(0);
  const dishes = ref([] as ReducedDishDetails[]);

  function setNumberOfGuests(newNumberOfGuests: number) {
    if (newNumberOfGuests == numberOfGuests.value) return;
    if (Number.isInteger(newNumberOfGuests) && newNumberOfGuests > 0) {
      numberOfGuests.value = newNumberOfGuests;
    } else {
      throw new Error("number of guests not a positive integer");
    }
  }

  function addToMenu(dishToAdd: ReducedDishDetails) {
    dishes.value.push(dishToAdd);
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
