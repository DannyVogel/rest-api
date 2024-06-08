<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/errors/401")
  .then((response) => response.json())
  .then((data) => console.log(data));`;
const output = `{
    "url": "/api/errors/401",
    "statusCode": 401,
    "statusMessage": "Unauthorized",
    "message": "Unauthorized",
}`;
const title = "Get Error By Status Code";
const error = ref();
const errorCode = ref<number>(400);
const errorCodes = [400, 401, 403, 404, 409, 429, 500, 503];
const isLoading = ref<boolean>(false);

const getErrorById = async (errorCode: number) => {
  error.value = null;
  isLoading.value = true;
  fetch(`/api/errors/${errorCode}`)
    .then((response) => response.json())
    .then((data) => {
      // delete data.stack
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
    <UCard class="w-full">
      <div v-if="!error" class="flex gap-4">
        <USelect v-model="errorCode" :options="errorCodes" color="gray" />
        <UButton
          @click="getErrorById(errorCode)"
          color="red"
          :loading="isLoading"
          >{{ `Get Error Code ${errorCode}` }}</UButton
        >
      </div>
      <div v-else>
        <pre>{{ error }}</pre>
        <p
          @click="error = null"
          class="text-red-500 mt-4 cursor-pointer hover:text-red-700"
        >
          Try another status code
        </p>
      </div>
    </UCard>
  </div>
</template>
