<script lang="ts" setup>
import type { Response, Post } from "~/types/common.interfaces";

const res = ref<Response>();
const message = ref<string>();
const posts = ref<Post[]>();
const number = ref<number>();

const greet = async () => {
  reset();
  try {
    const res = await $fetch("/api/greet", {
      method: "GET",
      headers: {
        Authorization: "Bearer token",
      },
    });
    message.value = res.message;
  } catch (error: Response | any) {
    message.value = error;
  }
};

const getPosts = async (number: number | null = null) => {
  reset();
  try {
    const res = await $fetch(`/api/posts/${number ? number : ""}`, {
      method: "GET",
    });
    if (res.statusCode === 200 && res.payload) {
      posts.value = res.payload as Post[];
    } else {
      posts.value = [];
    }
  } catch (error: Response | any) {
    console.log("error", error);
    posts.value = [];
  }
};

const reset = () => {
  message.value = undefined;
  res.value = undefined;
  posts.value = undefined;
};
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <UButton @click="greet">Greet</UButton>
    <div class="flex gap-4">
      <UInput v-model="number" type="number" color="gray" max="100" min="1" />
      <UButton @click="getPosts(number)">{{
        number ? `Get Post #${number}` : "Get All Posts"
      }}</UButton>
    </div>
    <UCard v-if="message">
      <div v-if="message" class="text-blue-500">
        <p>{{ message }}</p>
      </div>
    </UCard>
    <UCard v-if="posts" class="max-w-full overflow-x-scroll">
      <h1 class="font-bold text-xl">Posts</h1>
      <UTable :rows="posts">
        <template #title-data="{ row }">
          <p class="max-w-72 overflow-x-scroll">{{ row.title }}</p>
        </template>
        <template #body-data="{ row }">
          <p class="max-w-72 overflow-x-scroll">{{ row.body }}</p>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
