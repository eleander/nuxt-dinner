<template>
  <div class="flex min-h-screen flex-col px-3 pt-3">
    <Navbar />
    <div class="flex flex-grow flex-col md:flex-row">
      <SidebarPresenter class="md:w-1/4" />
      <main class="bg-white p-4 md:w-3/4">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
