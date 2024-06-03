<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `const res = await fetch(\`/api/posts/, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});`;
const output = `[
  { id: 1, author: '...', title: '...', body: '...' },
  { id: 2, author: '...', title: '...', body: '...' },
  { id: 3, author: '...', title: '...', body: '...' },
  /* ... */
  { id: 100, author: '...', title: '...', body: '...' },
];`;
const title = "Get All Posts";
const posts = ref<Post[]>([]);
const number = ref<number>();

const getPosts = async () => {
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
  }
};
</script>

<template>
  <APIBlock :title="title" :code-input="code" :code-output="output" />

  <UButton @click="getPosts()">Get All Posts </UButton>
  <UCard v-if="posts" class="w-full overflow-x-scroll">
    <h1 class="font-bold text-xl">Posts</h1>
    <UTable :rows="posts" class="overflow-y-scroll max-h-64 max-w-full">
      <template #title-data="{ row }">
        <p class="max-w-72">{{ row.title }}</p>
      </template>
      <template #body-data="{ row }">
        <p class="max-w-72">{{ row.body }}</p>
      </template>
    </UTable>
  </UCard>
</template>
