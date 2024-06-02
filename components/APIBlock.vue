<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <CodeBlock :code="code" />
  </div>
</template>
