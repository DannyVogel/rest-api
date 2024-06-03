<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));`;

const output = `{
    "statusCode": 200,
    "message": "Got all posts",
    "payload": [
      { post_id: 1, author: '...', title: '...', body: '...' },
      { post_id: 2, author: '...', title: '...', body: '...' },
      { post_id: 3, author: '...', title: '...', body: '...' },
      /* ... */
      { post_id: 100, author: '...', title: '...', body: '...' },
    ]
};`;

const title = "Get All Posts";
const posts = ref<Post[]>([]);
const isLoading = ref<boolean>(false);

const getPosts = async () => {
  isLoading.value = true;
  try {
    const res = await $fetch(`/api/posts/`, {
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
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <p class="font-bold">Live Data Example:</p>
    <UCard class="w-full overflow-x-scroll">
      <div class="flex justify-between items-baseline mb-2">
        <h1 class="font-bold text-xl">Posts</h1>
        <p
          v-if="posts.length"
          @click="posts = []"
          class="text-sm hover:text-red-500 cursor-pointer"
        >
          Clear data
        </p>
      </div>
      <UTable :rows="posts" class="overflow-y-scroll max-h-64 max-w-full">
        <template #title-data="{ row }">
          <p class="max-w-72">{{ row.title }}</p>
        </template>
        <template #body-data="{ row }">
          <p class="max-w-72">{{ row.body }}</p>
        </template>
        <template #empty-state>
          <div class="flex items-center justify-center h-60">
            <UButton
              size="xl"
              color="green"
              :loading="isLoading"
              @click="getPosts()"
              >Get All Posts
            </UButton>
          </div>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
