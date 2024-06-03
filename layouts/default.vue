<script lang="ts" setup>
const isOpen = ref(false);
const sendToGitHub = async () => {
  isOpen.value = false;
  await navigateTo("https://github.com/DannyVogel", {
    open: {
      target: "_blank",
    },
  });
};
const linksMain = [
  {
    label: "Trigger Errors",
    icon: "i-heroicons-shield-exclamation",
    to: "/trigger-errors",
    click: () => (isOpen.value = false),
  },
  {
    label: "Placeholder Posts",
    icon: "i-heroicons-document-text",
    to: "/posts",
    click: () => (isOpen.value = false),
  },
  {
    label: "User Posts",
    icon: "i-heroicons-document-text",
    to: "",
    click: () => (isOpen.value = false),
  },
];
const linksFooter = [
  {
    label: "GitHub",
    icon: "i-mdi-github",
    click: sendToGitHub,
  },
  // {
  //   label: "Help",
  //   icon: "i-heroicons-question-mark-circle",
  // },
];
</script>

<template>
  <div class="mt-4">
    <div
      class="flex justify-between md:justify-normal px-4 items-center gap-4 max-w-screen-lg mx-auto h-12"
    >
      <TheLogo />
      <UHorizontalNavigation
        :links="[linksMain, linksFooter]"
        class="hidden md:flex"
      />
      <div class="md:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          @click="isOpen = true"
        />
        <USlideover v-model="isOpen">
          <UCard
            class="flex flex-col flex-1"
            :ui="{
              body: { base: 'flex-1' },
              ring: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            }"
          >
            <template #header>
              <TheLogo @close="isOpen = false" :showX="true" />
            </template>
            <UVerticalNavigation :links="linksMain" />
            <template #footer>
              <UHorizontalNavigation :links="linksFooter" />
            </template>
          </UCard>
          <div class="p-4 flex flex-col gap-4"></div>
        </USlideover>
      </div>
    </div>
    <div class="max-w-screen-lg mx-auto container p-4 mt-10">
      <slot />
    </div>
  </div>
</template>

<style></style>
