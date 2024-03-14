<template>
  <TheHeader />
  <TheTimer :time="time" />
  <NodeList />
</template>

<script setup lang="ts">
const time = ref(5);

onMounted(() => {
  let decrement: any;
  setTimeout(() => {
    decrement = setInterval(() => {
      time.value--;
    }, 1000);
  }, 500);

  setTimeout(() => {
    clearInterval(decrement);
  }, 6000);

  setTimeout(() => {
    setInterval(() => {
      time.value++;
    }, 1000);
  }, 5500);
});
</script>
