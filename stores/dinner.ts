import { defineStore } from "pinia";

export const useMyDinnerStore = defineStore("dinner", () => {
  const numberOfGuests = ref(0);
});
