<script lang="ts" setup>
useHeadSafe(() => ({ title: "Errors" }));
const list = ref(null);
const code = ref(null);
const random = ref(null);

const visibleSection = ref("");

const listIsVisible = useElementVisibility(list, { threshold: 0.5 });
const codeIsVisible = useElementVisibility(code, { threshold: 0.5 });
const randomIsVisible = useElementVisibility(random, { threshold: 0.5 });

watchEffect(() => {
  if (listIsVisible.value) visibleSection.value = "list";
  if (codeIsVisible.value) visibleSection.value = "code";
  if (randomIsVisible.value) visibleSection.value = "random";
});
</script>

<template>
  <div class="relative md:grid md:grid-cols-12 md:gap-8">
    <div class="flex flex-col items-start gap-10 md:col-span-9">
      <ErrorsGetList id="list" ref="list" />
      <UDivider />
      <ErrorsGetByStatusCode id="code" ref="code" />
      <UDivider />
      <ErrorsGetRandom id="random" ref="random" />
      <UDivider />
    </div>
    <div
      class="hidden md:block md:col-span-3 justify-self-end sticky top-12 min-h-fit h-fit"
    >
      <div class="pl-4 border-l border-gray-600">
        <h3 class="font-bold">Table of Contents</h3>
        <ul class="mt-4 space-y-2">
          <li>
            <a
              href="#list"
              :class="{ 'text-primary': visibleSection === 'list' }"
              >Get List of Errors</a
            >
          </li>
          <li>
            <a
              href="#code"
              :class="{ 'text-primary': visibleSection === 'code' }"
              >Get By Status Code
            </a>
          </li>
          <li>
            <a
              href="#random"
              :class="{ 'text-primary': visibleSection === 'random' }"
              >Get Random Error</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
