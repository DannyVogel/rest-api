<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

const highlightedJS = await useShikiHighlighted(props.code);
</script>

<template>
  <UCard
    class="w-full border border-primary bg-[#0d1117] dark:bg-[#0d1117] overflow-scroll"
  >
    <div v-html="highlightedJS" />
  </UCard>
</template>
