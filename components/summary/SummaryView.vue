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
          <td>{{ theDishType(dish) }}</td>
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
const props = defineProps<{
  shoppingList: ExtendedIngredient[];
  number: number;
  menuPrice: string;
  dishes: ReducedDishDetails[];
}>();

const theDishType = (dish: ReducedDishDetails) => {
  return dishType(dish.dishTypes);
};
</script>

<style></style>
