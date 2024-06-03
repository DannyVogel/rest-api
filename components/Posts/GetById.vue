<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";

const code = `fetch("https://restfultest.netlify.app/api/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));`;
const output = `{
    "statusCode": 200,
    "message": "Post found",
    "payload": {
        "author": "9_BxzulrII",
        "post_id": "1",
        "title": "audio aequitas turbo corona",
        "body": "Vespillo dolorum defaeco stella tergeo comis. Saepe defessus tubineus voluptatem voro victoria ver thymbra tam absens. Amplitudo voluptates degero desolo dedecor annus subseco."
    }
}`;
const title = "Get Post By Id";
const post = ref<Post[]>([]);
const id = ref<number>(1);
const isLoading = ref<boolean>(false);
const errorMessage = ref<string>("");

const getPosts = async (id: number) => {
  errorMessage.value = "";
  post.value = [];
  isLoading.value = true;
  try {
    const res = await $fetch(`/api/posts/${id}`, {
      method: "GET",
    });
    if (res.statusCode === 200 && res.payload) {
      post.value.push(res.payload as Post);
    } else {
      throw new Error(res.message);
    }
  } catch (error: Response | any) {
    console.log("error", error);
    errorMessage.value = error.message;
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
          v-if="post.length"
          @click="post = []"
          class="text-sm hover:text-red-500 cursor-pointer"
        >
          Clear data
        </p>
      </div>
      <UTable :rows="post" class="overflow-y-scroll max-h-64 max-w-full">
        <template #title-data="{ row }">
          <p class="max-w-72">{{ row.title }}</p>
        </template>
        <template #body-data="{ row }">
          <p class="max-w-72">{{ row.body }}</p>
        </template>
        <template #empty-state>
          <div class="flex flex-col items-center justify-center gap-4 h-24">
            <div class="flex gap-4">
              <UInput
                v-model="id"
                type="number"
                color="gray"
                max="100"
                min="1"
              />
              <UButton
                @click="getPosts(id)"
                color="green"
                :loading="isLoading"
                >{{ `Get Post #${id}` }}</UButton
              >
            </div>
            <div class="text-red-500 h-6">
              {{ errorMessage ? errorMessage : "" }}
            </div>
          </div>
        </template>
      </UTable>
    </UCard>
  </div>
</template>
