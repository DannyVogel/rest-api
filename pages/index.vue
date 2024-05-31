<script lang="ts" setup>
import { version } from "~/package.json";
import type { Response, Post } from "~/types/common.interfaces";

const res = ref<Response>();
const message = ref<string>();
const codes = [200, 201, 202, 204, 400, 401, 403, 404, 500];
const code = ref<number>(200);
const post = ref<Post[]>();
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
    res.value = await $fetch(`/api/error/${code}`, {
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
      post.value = res.payload;
    } else {
      post.value = [];
    }
  } catch (error: Response | any) {
    console.log("error", error);
    post.value = error;
  }
};

const reset = () => {
  message.value = undefined;
  res.value = undefined;
  post.value = undefined;
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
    <UCard v-if="message || res || post">
      <div v-if="message" class="text-blue-500">
        <p>{{ message }}</p>
      </div>
      <div v-if="res" :class="textColor">
        <p>Status code: {{ res.statusCode }}</p>
        <p>Message: {{ res.message }}</p>
      </div>
      <ul v-if="post">
        <li v-for="p in post" :key="p.id">
          <p>Title: {{ p.title }}</p>
          <p>Content: {{ p.body }}</p>
          <p>Author: {{ p.userId }}</p>
          <p>Post ID: {{ p.id }}</p>
        </li>
      </ul>
    </UCard>
  </div>
</template>
