<script setup lang="ts">
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const date = d.getDate();
const signature = `Richard Wang  ${year}/${month}/${date}`;
</script>

<template>
  <div class="px-2 -mx-2 mt-4 py-2">
    {{ signature }}
  </div>
</template>
