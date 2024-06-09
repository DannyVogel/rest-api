<script lang="ts" setup>
const list = ref(null);
const code = ref(null);
const random = ref(null);

const listIsVisible = useElementVisibility(list);
const codeIsVisible = useElementVisibility(code);
const randomIsVisible = useElementVisibility(random);
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
    <div class="md:col-span-3 justify-self-end sticky top-12 min-h-fit h-fit">
      <h3 class="font-bold">Table of Contents</h3>
      <ul class="mt-4">
        <li>
          <a href="#list" :class="{ 'text-primary': listIsVisible }"
            >Get List of Errors</a
          >
        </li>
        <li>
          <a href="#code" :class="{ 'text-primary': codeIsVisible }"
            >Get By Status Code
          </a>
        </li>
        <li>
          <a href="#random" :class="{ 'text-primary': randomIsVisible }"
            >Get Random Error</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
