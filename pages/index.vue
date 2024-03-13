<template>
  <TheHeader />
  <TheTimer :time="time" />
  <!-- <NodeList /> -->
  <Modal />
</template>

<script setup lang="ts">
const time = ref(0);

onMounted(() => {
  setTimeout(() => {
    setInterval(() => {
      time.value++;
    }, 1000);
  }, 5000);
});
</script>
