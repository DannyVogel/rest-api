<script lang="ts" setup>
import { version } from "~/package.json";

const emit = defineEmits(["close"]);
defineProps({
  showX: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const { gtag } = useGtag();

const handleLinkClick = (link: string) => {
  gtag("event", "click", {
    event_category: "navigation",
    event_label: link,
  });
  emit("close");
};
</script>

<template>
  <div class="flex justify-between items-baseline">
    <NuxtLink to="/" @click="handleLinkClick('Home')">
      <div class="flex items-baseline gap-2">
        <UIcon name="i-dashicons-rest-api" class="w-5 h-5" />
        <h1 class="text-blue-400 text-3xl font-bold w-fit whitespace-nowrap">
          RESTful Test <span class="text-xs">v{{ version }}</span>
        </h1>
      </div>
    </NuxtLink>
    <UButton
      v-if="showX"
      @click="emit('close')"
      icon="i-heroicons-chevron-double-right"
      size="xs"
      color="white"
      square
      variant="ghost"
      class="transition-all duration-300 ease-in-out"
    />
  </div>
</template>
