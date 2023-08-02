<template>
  <div class="flex flex-wrap flex-row justify-center">
    <div
      v-for="dish in dishes?.results"
      @click="$emit('selectDish', dish.id)"
      class="card bg-base-100 shadow-xl w-64 m-3"
    >
      <NuxtImg
        loading="lazy"
        width="256"
        height="150"
        :src="dish.image"
        :alt="dish.title"
      />
      <div class="card-body">
        <h1 class="card-title">{{ dish.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SearchDishes } from "~/types/index";

const props = defineProps<{
  dishes: SearchDishes | null;
}>();

const emit = defineEmits<{
  selectDish: [selectedDishId: number];
}>();
</script>

<style></style>
