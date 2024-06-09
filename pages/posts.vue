<script lang="ts" setup>
const get = ref(null);
const byId = ref(null);
const create = ref(null);
const update = ref(null);
const del = ref(null);

const visibleSection = ref("");

const getIsVisible = useElementVisibility(get, { threshold: 0.5 });
const byIdIsVisible = useElementVisibility(byId, { threshold: 0.5 });
const createIsVisible = useElementVisibility(create, { threshold: 0.5 });
const updateIsVisible = useElementVisibility(update, { threshold: 0.5 });
const delIsVisible = useElementVisibility(del, { threshold: 0.5 });

watchEffect(() => {
  if (getIsVisible.value) visibleSection.value = "get";
  if (byIdIsVisible.value) visibleSection.value = "byId";
  if (createIsVisible.value) visibleSection.value = "create";
  if (updateIsVisible.value) visibleSection.value = "update";
  if (delIsVisible.value) visibleSection.value = "del";
});
</script>

<template>
  <div class="relative md:grid md:grid-cols-12 md:gap-8">
    <div class="flex flex-col items-start gap-10 md:col-span-9">
      <PostsGet id="get" ref="get" />
      <UDivider />
      <PostsGetById id="byId" ref="byId" />
      <UDivider />
      <PostsCreate id="create" ref="create" />
      <UDivider />
      <PostsUpdate id="update" ref="update" />
      <UDivider />
      <PostsDelete id="del" ref="del" />
      <UDivider />
    </div>
    <div
      class="hidden md:block md:col-span-3 justify-self-end sticky top-12 min-h-fit h-fit"
    >
      <div class="pl-4 border-l border-gray-600">
        <h3 class="font-bold">Table of Contents</h3>
        <ul class="mt-4 space-y-2">
          <li>
            <a href="#get" :class="{ 'text-primary': visibleSection === 'get' }"
              >Get All Posts</a
            >
          </li>
          <li>
            <a
              href="#byId"
              :class="{ 'text-primary': visibleSection === 'byId' }"
              >Get Post By ID</a
            >
          </li>
          <li>
            <a
              href="#create"
              :class="{ 'text-primary': visibleSection === 'create' }"
              >Create Post</a
            >
          </li>
          <li>
            <a
              href="#update"
              :class="{ 'text-primary': visibleSection === 'update' }"
              >Update Post</a
            >
          </li>
          <li>
            <a href="#del" :class="{ 'text-primary': visibleSection === 'del' }"
              >Delete Post</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
