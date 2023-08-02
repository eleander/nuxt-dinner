<template>
  <div class="flex flex-row w-full">
    <input
      type="text"
      :value="query"
      @input="$emit('setQuery', ($event.target as HTMLInputElement).value)"
      @keyup.enter="$emit('search')"
      placeholder="Dish name..."
      class="input input-bordered w-full max-w-xs mx-1"
    />
    <select
      :value="type"
      @input="$emit('setType', ($event.target as HTMLInputElement).value)"
      class="select select-bordered w-full max-w-xs mx-1"
    >
      <option value=" ">All</option>
      <option v-for="dishType in dishTypes" :key="dishType" :value="dishType">
        {{ dishType }}
      </option>
    </select>
    <button @click="$emit('search')" class="btn btn-ghost flex-grow">
      Search
    </button>
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
