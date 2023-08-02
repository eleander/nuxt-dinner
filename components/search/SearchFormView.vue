<template>
  <div>
    <h1>Search</h1>
    <input
      type="text"
      :value="query"
      @input="$emit('setQuery', ($event.target as HTMLInputElement).value)"
      placeholder="Dish name..."
    />
    <select
      :value="type"
      @input="$emit('setType', ($event.target as HTMLInputElement).value)"
    >
      <option value=" ">All</option>
      <option v-for="dishType in dishTypes" :key="dishType" :value="dishType">
        {{ dishType }}
      </option>
    </select>
    <button @click="$emit('search')">Search</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  query: string;
  type: string;
  dishTypes: string[];
}>();

const emits = defineEmits<{
  setType: [newType: string];
  setQuery: [newQuery: string];
  search: [];
}>();
</script>

<style></style>
