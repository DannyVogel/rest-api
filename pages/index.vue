<script lang="ts" setup>
import { version } from "~/package.json";
const message = ref<string>("");
const greet = async () => {
  try {
    message.value = await $fetch("/greet");
  } catch (error) {}
};
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <h1 class="text-blue-500 text-5xl">REST Api v{{ version }}</h1>
    <UButton @click="greet">Get a greeting</UButton>
    <p class="text-green-500">{{ message }}</p>
  </div>
</template>
