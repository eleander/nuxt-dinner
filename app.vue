<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const description =
  "This is an app to help you plan your dinner. It is built with Nuxt.js and TailwindCSS. It is used as a teaching tool in DH2643";

useHead({
  title: "Dinner Planner",
  meta: [
    {
      name: description,
    },
    {
      property: "og:image",
      content:
        "https://nuxt-dinner.vercel.app/images/interaction_programming.png",
    },
  ],
});

useServerSeoMeta({
  title: "Dinner Planner",
  description: description,
  ogTitle: "Dinner Planner for DH2643",
  ogDescription: description,
});
</script>
