<template>
  <div>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {{ year }} - All right reserved by DH2643</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<style></style>
