<template>
  <div>
    <PromiseNoData :pending="pending" :data="dish" :error="error">
      <DetailsView
        :dish="dish"
        :guests="2"
        :isDishInMenu="isDishInMenu"
        @addToMenu="addToMenu"
        @cancel="navigateHome"
      />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
import { useMyDinnerStore } from "@/stores/dinner";
const store = useMyDinnerStore();

const route = useRoute();
const dishId = route.params.id as string;

const {
  data: dish,
  error,
  pending,
} = useAsyncData(dishId, () => useGetDishDetails(dishId), {
  pick: [
    "id",
    "title",
    "pricePerServing",
    "image",
    "instructions",
    "sourceUrl",
    "extendedIngredients",
    "dishTypes",
  ],
});

const isDishInMenu = computed(() => {
  if (!dish.value) return false;
  return store.dishes.some((d) => d.id === dish.value?.id);
});

function addToMenu() {
  if (!dish.value) return;
  store.addToMenu(dish.value);
  navigateHome();
}

async function navigateHome() {
  return navigateTo("/");
}
</script>

<style></style>
