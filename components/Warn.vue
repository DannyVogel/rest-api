<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-2 items-center">
    <UIcon
      name="i-heroicons-exclamation-triangle"
      class="text-orange-500 mt-1"
    />
    <p class="text-white">{{ message }}</p>
  </div>
</template>
