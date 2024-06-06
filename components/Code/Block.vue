<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

const highlightedJS = await useShikiHighlighted(props.code);

const copied = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="w-full relative">
    <UCard
      class="w-full border border-primary bg-[#0d1117] dark:bg-[#0d1117] overflow-scroll"
    >
      <div v-html="highlightedJS" />
      <UTooltip
        text="Copy to clipboard"
        class="absolute top-1 right-2"
        @click="copyToClipboard"
      >
        <UButton
          :icon="
            copied
              ? 'i-heroicons-check-badge'
              : 'i-heroicons-clipboard-document'
          "
          size="xs"
          :color="copied ? 'green' : 'blue'"
          square
          variant="ghost"
          class="transition-all duration-300 ease-in-out"
        />
      </UTooltip>
    </UCard>
  </div>
</template>
