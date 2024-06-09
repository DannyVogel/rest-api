<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/errors/random")
  .then((response) => response.json())
  .then((data) => console.log(data));`;
const output = `{
    "url": "/api/errors/403",
    "statusCode": 403,
    "statusMessage": "Forbidden",
    "message": "Forbidden",
}`;
const title = "Get Random Error";
const error = ref();
const isLoading = ref<boolean>(false);

const getRandomError = async () => {
  error.value = null;
  isLoading.value = true;
  await fetch("/api/errors/random")
    .then((response) => response.json())
    .then((data) => {
      error.value = {
        url: data.url,
        statusCode: data.statusCode,
        statusMessage: data.statusMessage,
        message: data.message,
      };
    });
  isLoading.value = false;
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <p class="font-bold">Live Data Example:</p>
    <UCard class="w-full min-h-60">
      <div v-if="!error" class="flex gap-4">
        <UButton @click="getRandomError()" color="red" :loading="isLoading">
          Get Random Error
        </UButton>
      </div>
      <div v-else>
        <pre>{{ error }}</pre>
        <p
          @click="error = null"
          class="text-red-500 mt-4 cursor-pointer hover:text-red-700"
        >
          Try another error status code
        </p>
      </div>
    </UCard>
  </div>
</template>
