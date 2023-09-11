<template>
  <div>
    <SidebarView
      :guests="store.numberOfGuests"
      :dishes="store.dishes"
      @changeNumber="changeNumberOfGuests"
      @removeDish="removeDish"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMyDinnerStore } from "@/stores/dinner";
import { ReducedDishDetails } from "types";
const store = useMyDinnerStore();

function changeNumberOfGuests(number: number) {
  store.setNumberOfGuests(number);
}

function removeDish(dish: ReducedDishDetails) {
  store.removeFromMenu(dish.id);
}
</script>

<style></style>
