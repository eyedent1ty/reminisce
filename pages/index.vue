<template>
  <TheHeader />
  <TheTimer :time="time" />
  <NodeList />
</template>

<script setup lang="ts">
const time = useTimer();
const isGameFinished = useGame();

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
    const increment = setInterval(() => {
      time.value++;
    }, 1000);

    watchEffect(() => {
      if (isGameFinished.value) {
        clearInterval(increment);
      }
    });
  }, 5500);
});
</script>
