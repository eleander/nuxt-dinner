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
      <PaginationView
        v-if="dishes"
        :totalPages="totalPages"
        :currentPage="page"
        @prevPage="decrementPage"
        @nextPage="incrementPage"
      />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
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

// Pagination
const page = ref(0);

function incrementPage() {
  if (page.value >= totalPages.value) return;
  page.value++;
}

function decrementPage() {
  if (page.value <= 0) return;
  page.value--;
}

const totalPages = computed(() => {
  if (!dishes.value) return 1;
  return Math.floor(dishes.value.totalResults / dishes.value.number ?? 1);
});

// Data
const {
  data: dishes,
  error,
  pending,
  refresh,
} = useAsyncData(
  `search-${page.value}-${query.value}-${type.value}`,
  () => useSearchDishes(query.value, type.value, page.value),
  { pick: ["results", "number", "offset", "totalResults"], watch: [page] }
);

function navigateToDish(dishId: number) {
  return navigateTo(`/dish/${dishId}`);
}
</script>

<style></style>
