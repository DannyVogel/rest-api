<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-2 items-start sm:items-center">
    <UIcon
      name="i-heroicons-exclamation-triangle"
      class="text-orange-500 mt-1.5 sm:mt-1 w-4 h-4 shrink-0"
    />
    <p class="text-black dark:text-white">{{ message }}</p>
  </div>
</template>
