<template>
  <div class="flex flex-wrap flex-row justify-center">
    <div
      v-for="dish in dishes?.results"
      @click="$emit('selectDish', dish)"
      class="card bg-base-100 shadow-xl w-64 m-3"
    >
      <NuxtImg
        width="256"
        height="150"
        :src="dish.image"
        :alt="dish.title"
        :preload="true"
      />
      <div class="card-body">
        <h1 class="card-title">{{ dish.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SearchDishes, SearchDishesResult } from "~/types";

const props = defineProps<{
  dishes: Pick<SearchDishes, "results"> | null;
}>();

const emit = defineEmits<{
  selectDish: [selectedDish: SearchDishesResult];
}>();
</script>

<style></style>
