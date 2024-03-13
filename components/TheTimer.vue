<template>
  <h3 class="text-center text-3xl">
    {{ time }}
  </h3>
</template>

<script setup lang="ts">
defineProps({
  time: {
    type: Number,
    required: true
  }
});
</script>
