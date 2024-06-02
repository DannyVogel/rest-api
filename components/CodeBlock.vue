<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

const highlightedJS = await useShikiHighlighted(props.code);
// const highlightedNuxt = await useShikiHighlighted(nuxtCode);

// const tabs = [
//   {
//     label: "javascript",
//   },
//   {
//     label: "nuxt",
//   },
// ];
</script>

<template>
  <UCard
    class="w-full border border-primary bg-[#0d1117] last:dark:bg-[#0d1117] overflow-scroll"
    :ui="{ body: { padding: 'pt-0 sm:pt-0' } }"
  >
    <div v-html="highlightedJS" />
  </UCard>

  <!-- <UTabs :items="tabs" class="w-full">
    <template #item="{ item }">
  <UCard
    class="w-full border border-primary bg-[#0d1117] last:dark:bg-[#0d1117]"
  >
    <p class="text-white">Get All Posts: '/api/posts'</p>
    <div v-html="highlightedJS" />
    <div v-if="item.label === 'javascript'" v-html="highlightedJS" />
        <div v-else-if="item.label === 'nuxt'" v-html="highlightedNuxt" />
  </UCard>
  </template>
  </UTabs> -->
</template>
