<template>
  <Transition name="fade">
    <dialog open class="modal" v-if="modal">
      <div class="modal-box">
        <header class="font-bold text-lg">Confirmation</header>
        <main class="py-4">Are you sure you want to restart the game?</main>
        <footer class="flex justify-end gap-2">
          <TheButton @click="closeModal">Cancel</TheButton>
          <TheButton primary @click="confirmModal">Confirm</TheButton>
        </footer>
      </div>
      <div
        method="dialog"
        class="modal-backdrop bg-black opacity-40"
        @click="closeModal"
      ></div>
    </dialog>
  </Transition>
</template>

<script setup lang="ts">
const modal = useModal();
const reset = useReset();

const closeModal = () => {
  modal.value = false;
};

const confirmModal = () => {
  reset.value = true;
  closeModal();
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>