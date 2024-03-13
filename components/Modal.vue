<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modal">
        <div
          @click="closeModal"
          class="absolute bg-black opacity-60 z-20 top-0 left-0 right-0 bottom-0"
        ></div>
        <div
          class="bg-white rounded w-11/12 sm:w-1/2 lg:w-1/3 max-w-2xl max-h-40 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3"
        >
          <header
            class="flex justify-between items-center min-h-12 border-b font-bold"
          >
            <h3 class="text-2xl">Confirmation</h3>
            <button type="button" @click="closeModal">X</button>
          </header>
          <main
            class="text-lg text-center border-b flex items-center justify-center min-h-12"
          >
            Are you sure you want to restart the game?
          </main>
          <footer class="flex justify-end items-center min-h-12 gap-2">
            <TheButton @click="closeModal">Cancel</TheButton>
            <TheButton primary>Confirm</TheButton>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const modal = useModal();

const closeModal = () => {
  modal.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
