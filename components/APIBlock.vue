<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  codeInput: {
    type: String,
    required: true,
  },
  codeOutput: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="w-full flex flex-col items-start gap-4">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <CodeBlock :code="codeInput" />
    <p class="font-bold">Output:</p>
    <CodeBlock :code="codeOutput" />
  </div>
</template>
