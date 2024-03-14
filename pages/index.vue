<template>
  <TheHeader />
  <TheTimer :time="time" />
  <NodeList />
</template>

<script setup lang="ts">
const time = useTimer();
const isGameFinished = useGame();
const reset = useReset();
const start = useStart();

let decrement: any;
let increment: any;

const startTimer = () => {
  setTimeout(() => {
    decrement = setInterval(() => {
      time.value--;
    }, 1000);
  }, 500);

  setTimeout(() => {
    clearInterval(decrement);
    start.value = true;
  }, 6000);

  setTimeout(() => {
    increment = setInterval(() => {
      time.value++;
    }, 1000);

    watchEffect(() => {
      if (isGameFinished.value) {
        clearInterval(increment);
      }
    });
  }, 5500);
};

watchEffect(() => {
  if (reset.value) {
    time.value = 5;
    clearInterval(increment);
    clearInterval(decrement);

    start.value = false;

    startTimer();
  }
});

startTimer();
</script>
