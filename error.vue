<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
console.error("error page", props.error);
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center gap-4"
  >
    <h2 class="text-3xl font-bold">THE ERROR PAGE</h2>
    <h1 class="text-5xl font-bold">{{ error.statusCode }}</h1>
    <p class="text-lg">{{ error.message }}</p>
    <button
      class="px-2 py-1 bg-green-600 text-white font-bold border border-green-700 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out"
      @click="handleError"
    >
      Clear errors
    </button>
  </div>
</template>
