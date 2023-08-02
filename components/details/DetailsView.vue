b
<template>
  <div>
    <div v-if="dish">
      <button :disabled="isDishInMenu" @click="$emit('addToMenu')">
        Add to Menu
      </button>
      <button @click="$emit('cancel')">Cancel</button>
      <h1>{{ dish.title }}</h1>
      <div>
        {{ dish.pricePerServing }}. For {{ guests }}:
        {{ (dish.pricePerServing * guests).toFixed(2) }}
      </div>
      <NuxtImg :src="dish.image" height="300" />
      <div>{{ dish.instructions }}</div>
      <div><a :href="dish.sourceUrl">Original recipe</a></div>
      <ol>
        <li v-for="ingr in dish.extendedIngredients" :key="ingr.id">
          {{ ingr.name }} {{ ingr.amount }} {{ ingr.unit }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DishDetails } from "@/types/index";

const props = defineProps<{
  dish: DishDetails | null;
  guests: number;
  isDishInMenu: boolean;
}>();

const emit = defineEmits<{
  cancel: [];
  addToMenu: [];
}>();
</script>

<style></style>
