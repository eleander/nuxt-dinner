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
    <PromiseNoData :data="dishes" :error="error?.data" :pending="pending">
      <SearchResultsView :dishes="dishes" />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
const query = ref("pizza");
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
} = useSearchDishes(query.value, type.value);
</script>

<style></style>
