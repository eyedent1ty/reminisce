<template>
  <h3 class="text-center text-3xl" v-if="!isGameFinished">
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

const isGameFinished = useGame();
</script>
