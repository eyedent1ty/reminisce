<template>
  <h3 class="text-center text-3xl">
    <span v-if="time">{{ time }}</span> 
    <span v-else>GO!</span>

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
