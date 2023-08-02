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
    <PromiseNoData :data="dishes" :error="error?.message" :pending="pending">
      <SearchResultsView :dishes="dishes" @selectDish="navigateToDish" />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
const query = ref("");
const type = ref("");
const dishTypes = ["starter", "main course", "dessert"];

function setQuery(newQuery: string) {
  query.value = newQuery;
}

function setType(newType: string) {
  type.value = newType;
}

const {
  data: dishes,
  error,
  pending,
  refresh,
} = useAsyncData("searchDishes", () =>
  useSearchDishes(query.value, type.value)
);

function navigateToDish(dishId: number) {
  return navigateTo(`/dish/${dishId}`);
}
</script>

<style></style>
