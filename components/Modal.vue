<template>
  <div class="absolute bg-black opacity-60 top-0 left-0 right-0 bottom-0"></div>
  <div
    class="bg-white rounded w-1/2 max-w-2xl max-h-40 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <header class="flex justify-between items-center min-h-12 px-3 border-b">
      <h3 class="text-2xl">Confirmation</h3>
      <button type="button">X</button>
    </header>
    <main
      class="text-lg text-center border-b flex items-center justify-center min-h-12"
    >
      Are you sure you want to restart the game?
    </main>
    <footer class="flex justify-end items-center min-h-12">
      <button>Cancel</button>
      <button>Confirm</button>
    </footer>
  </div>
</template>
