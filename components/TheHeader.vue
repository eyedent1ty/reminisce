<template>
  <header class="container mx-auto py-5">
    <nav class="flex justify-between">
      <h1 class="text-3xl font-bold">reminisce</h1>
      <ul class="flex gap-5">
        <Transition name="fade">
          <li class="flex items-center" v-if="start">
            <TheButton type="button" primary @click="openModal"
              >Restart</TheButton
            >
          </li>
        </Transition>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const modal = useModal();
const start = useStart();

const openModal = () => {
  modal.value = true;
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
