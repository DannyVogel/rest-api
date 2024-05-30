<script lang="ts" setup>
import { version } from "~/package.json";
interface Response {
  statusCode: number;
  message: string;
}
const res = ref<Response>();
const message = ref<string>();
const codes = [200, 201, 202, 204, 400, 401, 403, 404, 500];
const code = ref<number>(200);

const greet = async () => {
  message.value = undefined;
  res.value = undefined;
  try {
    const res = await $fetch("/greet", {
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
  message.value = undefined;
  res.value = undefined;
  try {
    res.value = await $fetch(`/error/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: Response | any) {
    res.value = error;
  }
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
    <div v-if="message" class="text-blue-500">
      <p>{{ message }}</p>
    </div>
    <div v-if="res" :class="textColor">
      <p>Status code: {{ res }}</p>
      <p>Message: {{ res.message }}</p>
    </div>
  </div>
</template>
