<template>
  <div>
    <table class="table">
      <tbody>
        <tr>
          <th>Dish Name</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
        <tr v-for="dish in dishes" :key="dish.id">
          <td>
            <a>{{ dish.title }}</a>
          </td>
          <td>{{ dish.dishTypes[0] }}</td>
          <td class="dishPrice">
            {{ (dish.pricePerServing * number).toFixed(2) }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total:</td>
          <td></td>
          <td class="dishPrice">
            {{ menuPrice }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ExtendedIngredient, ReducedDishDetails } from "types";
defineProps<{
  shoppingList: ExtendedIngredient[];
  number: number;
  menuPrice: string;
  dishes: ReducedDishDetails[];
}>();
</script>

<style></style>
