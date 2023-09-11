<template>
  <div>
    <SearchFormView
      :query="query"
      @setQuery="setQuery"
      :type="type"
      @setType="setType"
      :dishTypes="dishTypes"
      @search="refresh"
    />
    <PromiseNoData :data="dishes" :error="error" :pending="pending">
      <SearchResultsView :dishes="dishes" @selectDish="navigateToDish" />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
import { SearchDishesResult } from "types";

// Form State
const query = ref("");
const type = ref("");
const dishTypes = ["starter", "main course", "dessert"];

function setQuery(newQuery: string) {
  query.value = newQuery;
}

function setType(newType: string) {
  type.value = newType;
}

// Data
const {
  data: dishes,
  error,
  pending,
  refresh,
} = useAsyncData(
  `search-$-${query.value}-${type.value}`,
  () => useSearchDishes(query.value, type.value),
  { pick: ["results", "number", "offset", "totalResults"] }
);

function navigateToDish(dish: SearchDishesResult) {
  return navigateTo(`/dish/${dish.id}`);
}
</script>

<style></style>
