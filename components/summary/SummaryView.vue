<template>
  <div>
    <div v-if="menuPrice == '0.00'">
      <AlertError errorMessage="No items in your cart!" />
    </div>
    <table class="table" v-else>
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
          <td>{{ dishType(dish.dishTypes) }}</td>
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
// Manual import of dishType function
import { dishType } from "#imports";
const props = defineProps<{
  shoppingList: ExtendedIngredient[];
  number: number;
  menuPrice: string;
  dishes: ReducedDishDetails[];
}>();
</script>

<style></style>
