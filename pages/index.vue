<script lang="ts" setup>
import { version } from "~/package.json";
import type { Response, Post } from "~/types/common.interfaces";

const res = ref<Response>();
const message = ref<string>();
const codes = [200, 201, 202, 204, 400, 401, 403, 404, 500];
const code = ref<number>(200);
const posts = ref<Post[]>();
const number = ref<number>();

const greet = async () => {
  reset();
  try {
    const res = await $fetch("/api/greet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
      },
    });
    message.value = res.message;
  } catch (error: Response | any) {
    message.value = error;
  }
};

const getStatus = async (code: number) => {
  reset();
  try {
    res.value = await $fetch(`/api/errors/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: Response | any) {
    console.log("error", error);
    res.value = error;
  }
};

const getPosts = async (number: number | null = null) => {
  reset();
  try {
    const res = await $fetch(`/api/posts/${number ? number : ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.statusCode === 200 && res.payload) {
      posts.value = res.payload;
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

const textColor = computed(() => {
  if (
    res.value &&
    res.value?.statusCode >= 200 &&
    res.value?.statusCode < 300
  ) {
    return "text-green-500";
  } else {
    return "text-red-500";
  }
});

const good = computed(() => {
  if (code.value >= 200 && code.value < 300) {
    return "green";
  } else {
    return "red";
  }
});
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <h1 class="text-blue-500 text-5xl">REST API v{{ version }}</h1>
    <UButton @click="greet">Greet</UButton>
    <div class="flex gap-4">
      <USelect v-model="code" :options="codes" color="gray" />
      <UButton :color="good" @click="getStatus(code)">Get {{ code }}</UButton>
    </div>
    <div class="flex gap-4">
      <UInput v-model="number" type="number" color="gray" max="100" min="1" />
      <UButton @click="getPosts(number)">{{
        number ? `Get Post #${number}` : "Get All Posts"
      }}</UButton>
    </div>
    <UCard v-if="message || res">
      <div v-if="message" class="text-blue-500">
        <p>{{ message }}</p>
      </div>
      <div v-if="res" :class="textColor">
        <p>Status code: {{ res.statusCode }}</p>
        <p>Message: {{ res.message }}</p>
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
