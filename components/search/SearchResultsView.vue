<template>
  <div v-for="dish in dishes?.results" @click="$emit('selectDish', dish.id)">
    <h1>{{ dish.title }}</h1>
    <NuxtImg :src="dish.image" :alt="dish.title" />
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
