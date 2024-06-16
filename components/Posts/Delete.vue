<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));`;

const output = `{
    "statusCode": 200,
    "message": "Post deleted successfully",
    "payload": null
};`;

const title = "Delete Post";
const id = ref<number>(1);
const isLoading = ref<boolean>(false);
const response = ref();

const deletePostById = async (id: number) => {
  try {
    isLoading.value = true;
    const res = await $fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    response.value = res;
  } catch (error: Response | any) {
    console.log("error", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4 scroll-mt-14">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <Warn
      message="The updated post will not actually be deleted but the response will pretend it did."
    />
    <p class="font-bold">Live Data Example:</p>
    <UCard class="w-full min-h-60">
      <div v-if="!response" class="flex gap-4">
        <UInput v-model="id" type="number" color="gray" max="100" min="1" />
        <UButton @click="deletePostById(id)" color="red" :loading="isLoading">
          Delete Post with id: {{ id }}
        </UButton>
      </div>
      <div v-else>
        <pre>{{ response }}</pre>
        <p
          @click="response = null"
          class="text-red-500 mt-4 cursor-pointer hover:text-red-700"
        >
          Delete another post
        </p>
      </div>
    </UCard>
  </div>
</template>
