<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `
const res = await fetch(\`/api/posts/{id}, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
`;
const output = `{ 
  id: 1, 
  author: '...', 
  title: '...', 
  body: '...' 
},`;
const title = "Get Post By Id";
const post = ref<Post>();
const id = ref<number>(1);

const getPosts = async (id: number) => {
  try {
    const res = await $fetch(`/api/posts/${id}`, {
      method: "GET",
    });
    if (res.statusCode === 200 && res.payload) {
      post.value = res.payload as Post;
    }
  } catch (error: Response | any) {
    console.log("error", error);
  }
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <div class="flex gap-4">
      <UInput v-model="id" type="number" color="gray" max="100" min="1" />
      <UButton @click="getPosts(id)">{{ `Get Post #${id}` }}</UButton>
    </div>
    <UCard v-if="post" class="w-full overflow-x-scroll">
      <h1 class="font-bold text-xl">Posts</h1>
      <UTable :rows="[post]" class="overflow-y-scroll max-h-64 max-w-full">
        <template #title-data="{ row }">
          <p class="max-w-72">{{ row.title }}</p>
        </template>
        <template #body-data="{ row }">
          <p class="max-w-72">{{ row.body }}</p>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
