<template>
  <div>
    <div class="navbar bg-blue-700 rounded-lg">
      <div class="flex-1 flex-grow">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl text-white">{{
          title
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="/summary"
          class="btn btn-ghost normal-case text-xl text-white"
          >Summary</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "DinnerModel",
  },
});
</script>

<style></style>
