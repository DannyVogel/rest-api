<script lang="ts" setup>
import type { Response } from "~/types/common.interfaces";

const message = ref<string>();

const greet = async () => {
  message.value = undefined;
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
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <HomeWelcome />
  </div>
</template>
