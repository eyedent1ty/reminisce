<template>
  <header class="container mx-auto py-5">
    <nav class="flex justify-between">
      <h1 class="text-3xl font-bold">reminisce</h1>
      <ul class="flex gap-5">
        <li class="flex items-center">
          <button type="button" @click="modal = true">Restart</button>
        </li>
        <li class="flex items-center">
          <button type="button">New Game</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const modal = useModal();
</script>
