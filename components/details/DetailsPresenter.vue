<template>
  <div>
    <DetailsView />
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
</script>

<style></style>
