<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/errors")
  .then((response) => response.json())
  .then((data) => console.log(data));`;
const output = `{
  "statusCode": 200,
  "statusMessage": "OK",
  "message": "Got list of common error status codes successfully!",
  "payload": [
    {
      "statusCode": 400,
      "statusMessage": "Bad Request",
      "description": "The server could not understand the request due to invalid syntax."
    },
    {
      "statusCode": 401,
      "statusMessage": "Unauthorized",
      "description": "The client must authenticate itself to get the requested response."
    },
    /* ... */
  ]
}`;
const title = "Get List of Errors";
const errorsList = ref([]);
const isLoading = ref<boolean>(false);

const getErrorsList = async () => {
  errorsList.value = [];
  isLoading.value = true;
  try {
    const response = await $fetch("/api/errors");
    errorsList.value = response.payload as [];
  } catch (error) {
    console.error(error);
  }
  isLoading.value = false;
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <p class="font-bold">Live Data Example:</p>
    <UCard class="w-full overflow-x-scroll">
      <div class="flex justify-between items-baseline mb-2">
        <h1 class="font-bold text-xl">Errors</h1>
        <p
          v-if="errorsList.length"
          @click="errorsList = []"
          class="text-sm hover:text-red-500 cursor-pointer"
        >
          Clear data
        </p>
      </div>
      <UTable :rows="errorsList" class="overflow-y-scroll max-h-64 max-w-full">
        <template #statusCode-header="{ row }">
          <p class="max-w-74 text-nowrap">Status Code</p>
        </template>
        <template #statusMessage-header="{ row }">
          <p class="max-w-74 text-nowrap">Status Message</p>
        </template>
        <template #statusCode-data="{ row }">
          <p class="max-w-72 font-bold text-red-500">{{ row.statusCode }}</p>
        </template>
        <template #statusMessage-data="{ row }">
          <p class="max-w-72 font-bold">{{ row.statusMessage }}</p>
        </template>
        <template #empty-state>
          <div class="flex items-center justify-center h-60">
            <UButton
              size="xl"
              color="green"
              :loading="isLoading"
              @click="getErrorsList()"
              >Get List of Errors
            </UButton>
          </div>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
