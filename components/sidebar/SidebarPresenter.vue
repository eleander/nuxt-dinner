<template>
  <div>
    <SidebarView
      :guests="store.numberOfGuests"
      :dishes="store.dishes"
      @changeNumber="changeNumberOfGuests"
      @removeDish="removeDish"
    />
  </div>
</template>

<script lang="ts" setup>
import { useMyDinnerStore } from "@/stores/dinner";
const store = useMyDinnerStore();

function changeNumberOfGuests(number: number) {
  store.setNumberOfGuests(number);
}

function removeDish(id: number) {
  store.removeFromMenu(id);
}
</script>

<style></style>
