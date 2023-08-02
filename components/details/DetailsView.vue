b
<template>
  <div>
    <div v-if="dish" class="prose">
      <h1>{{ dish.title }}</h1>
      <button
        :disabled="isDishInMenu"
        @click="$emit('addToMenu')"
        class="btn btn-ghost"
      >
        Add to Menu
      </button>
      <button @click="$emit('cancel')" class="btn btn-ghost">Cancel</button>
      <p>Price per servings: {{ dish.pricePerServing }}$</p>
      <p>
        For {{ guests }} guests:
        {{ (dish.pricePerServing * guests).toFixed(2) }}$
      </p>
      <div class="flex flex-col items-center">
        <NuxtImg
          loading="lazy"
          width="350"
          :src="dish.image"
          class="rounded-lg"
        />
      </div>
      <p>{{ dish.instructions }}</p>
      <p><a :href="dish.sourceUrl">Original recipe</a></p>
      <ol>
        <li v-for="ingr in dish.extendedIngredients" :key="ingr.id">
          {{ ingr.name }} {{ ingr.amount }} {{ ingr.unit }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ReducedDishDetails } from "@/types";

const props = defineProps<{
  dish: ReducedDishDetails | null;
  guests: number;
  isDishInMenu: boolean;
}>();

const emit = defineEmits<{
  cancel: [];
  addToMenu: [];
}>();
</script>

<style></style>
