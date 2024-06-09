<script setup lang="ts">
useHeadSafe(() => ({
  titleTemplate: (title?: string) =>
    `${title ? `${title} | ` : ""}RESTful Test`,
  meta: [
    {
      name: "description",
      content:
        "Mock API service for developers. Perform CRUD operations on posts or check your apps' error handling. Ideal for testing and enhancing your apps.",
    },
  ],
}));
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: transparent !important;
}

::-webkit-scrollbar-track {
  margin: 5px;
  border-radius: 1rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #34488a;
  box-shadow: inset 0 0 6px #172554;
  cursor: pointer;
}

::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}
</style>
