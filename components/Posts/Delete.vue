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
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4 scroll-mt-14">
    <APIBlock :title="title" :code-input="code" :code-output="output" />
    <Warn
      message="The updated post will not actually be deleted but the response will pretend it did."
    />
  </div>
</template>
