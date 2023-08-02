<template>
  <div>
    <PromiseNoData :pending="pending" :data="dish" :error="error">
      <DetailsView
        :dish="dish"
        :guests="2"
        :is-dish-in-menu="true"
        @add-to-menu="addToMenu"
        @cancel="navigateHome"
      />
    </PromiseNoData>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const dishId = route.params.id as string;

const {
  data: dish,
  error,
  pending,
} = useAsyncData("getDish", () => useGetDishDetails(dishId));

function addToMenu() {
  console.log("Add to menu");
}

function navigateHome() {
  return navigateTo("/");
}
</script>

<style></style>
