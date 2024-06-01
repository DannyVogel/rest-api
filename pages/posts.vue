<script lang="ts" setup>
import type { Post } from "~/types/common.interfaces";
// import { v4 as uuidv4 } from "uuid";

const createPost = async () => {
  const post: Post = {
    author: "John Doe",
    post_id: "1",
    title: "Title",
    body: "Body",
  };
  const res = await $fetch("/api/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: post,
  });
  console.log("res", res);
};

const updatePost = async () => {
  const post = {
    author: "John Doe",
    post_id: "1",
    body: "Body",
  };
  const res = await $fetch("/api/posts/1/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: post,
  });
  console.log("res", res);
};
</script>

<template>
  <div>
    <UButton @click="createPost">Create Post</UButton>
    <UButton @click="updatePost">Update Post</UButton>
  </div>
</template>
