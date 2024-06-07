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
const posts = ref<Post[]>([]);
const id = ref<number>(1);
const isLoading = ref<boolean>(false);

const createPost = async (id: number) => {
  isLoading.value = true;
  posts.value = [];
  try {
    const post = {
      title: "This is the new title",
    };
    const res = await $fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: post,
    });
    if (res.statusCode === 200 && res.payload) {
      posts.value = res.payload as Post[];
    } else {
      throw new Error(res.message);
    }
  } catch (error: Response | any) {
    console.error("error", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <Warn
      message="The updated post will not actually be deleted but the response will pretend it did."
    />
    <!-- <p class="font-bold">Live Data Example:</p>
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
      <UTable :rows="posts" class="max-h-64 max-w-full">
        <template #title-data="{ row }">
          <p class="max-w-72">{{ row.title }}</p>
        </template>
        <template #body-data="{ row }">
          <p class="max-w-72">{{ row.body }}</p>
        </template>
        <template #empty-state>
          <div class="flex items-center justify-center h-24">
            <UButton
              size="xl"
              color="green"
              :loading="isLoading"
              @click="createPost(id)"
              >Delete Post
            </UButton>
          </div>
        </template>
      </UTable>
    </UCard> -->
  </div>
</template>
