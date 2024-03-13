<template>
  <button v-if="primary" :class="[{ 'bg-primary': primary }, computedClasses]">
    <slot />
  </button>
  <button v-else :class="[{ 'bg-gray-700': !primary }, computedClasses]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  primary: {
    type: Boolean,
    default: false
  }
});

const computedClasses = computed(() => 'min-w-24 min-h-10 rounded font-bold text-white');
</script>
