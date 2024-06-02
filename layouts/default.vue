<script lang="ts" setup>
import { version } from "~/package.json";

const links = [
  [
    {
      label: "Trigger Errors",
      icon: "i-heroicons-shield-exclamation",
      to: "/trigger-errors",
    },
    {
      label: "Placeholder Posts",
      icon: "i-heroicons-document-text",
      to: "/posts",
    },
    {
      label: "User Posts",
      icon: "i-heroicons-document-text",
      to: "",
    },
  ],
  [
    {
      label: "GitHub",
      icon: "i-mdi-github",
    },
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>

<template>
  <div class="mt-4">
    <div class="flex items-center gap-4 max-w-screen-lg mx-auto">
      <NuxtLink to="/">
        <h1 class="text-blue-500 text-3xl font-bold w-fit whitespace-nowrap">
          TestREST <span class="text-xs">v{{ version }}</span>
        </h1>
      </NuxtLink>
      <UHorizontalNavigation :links="links" class="" />
    </div>
    <div class="max-w-screen-lg mx-auto container p-4 mt-10">
      <slot />
    </div>
  </div>
</template>

<style></style>
