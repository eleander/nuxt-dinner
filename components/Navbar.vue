<template>
  <div>
    <div class="navbar bg-blue-700 rounded-lg">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl text-white">{{ title }}</a>
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
