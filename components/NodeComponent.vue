<template>
  <div
    @click="$emit('flip', id)"
    class="flex justify-center items-center rounded-full text-white text-4xl font-bold w-20 h-20 transition-all"
    :class="{
      'scale-x-[-1]': !isActive,
      'bg-primary': isActive,
      'cursor-pointer': !isActive,
      'bg-gray-700': !isActive,
    }"
  >
    <span :class="{ 'hidden': !isActive }">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true
  }
});

defineEmits(['flip'])
</script>
