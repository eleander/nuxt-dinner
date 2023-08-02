<template>
  <div>
    <SummaryView
      :shoppingList="shoppingList"
      :menuPrice="menuPriceCalculated"
      :dishes="store.dishes"
      :number="store.numberOfGuests"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMyDinnerStore } from "@/stores/dinner";

const store = useMyDinnerStore();

const shoppingList = computed(() => {
  return useShoppingList(store.dishes);
});

const menuPriceCalculated = computed(() => {
  return (menuPrice(store.dishes) * store.numberOfGuests).toFixed(2);
});
</script>

<style></style>
