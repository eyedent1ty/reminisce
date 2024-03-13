<template>
  <div class="absolute bg-black opacity-60 top-0 left-0 right-0 bottom-0"></div>
  <div
    class="bg-white rounded w-11/12 sm:w-1/2 lg:w-1/3 max-w-2xl max-h-40 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3"
  >
    <header class="flex justify-between items-center min-h-12 border-b font-bold">
      <h3 class="text-2xl">Confirmation</h3>
      <button type="button">X</button>
    </header>
    <main
      class="text-lg text-center border-b flex items-center justify-center min-h-12"
    >
      Are you sure you want to restart the game?
    </main>
    <footer class="flex justify-end items-center min-h-12 gap-2">
      <TheButton>Cancel</TheButton>
      <TheButton primary>Confirm</TheButton>
    </footer>
  </div>
</template>
