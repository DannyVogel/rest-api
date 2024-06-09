<script lang="ts" setup>
const get = ref(null);
const byId = ref(null);
const create = ref(null);
const update = ref(null);
const del = ref(null);

const getIsVisible = useElementVisibility(get);
const byIdIsVisible = useElementVisibility(byId);
const createIsVisible = useElementVisibility(create);
const updateIsVisible = useElementVisibility(update);
const delIsVisible = useElementVisibility(del);
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
      <PostsDelete id="delete" ref="del" />
      <UDivider />
    </div>
    <div class="md:col-span-3 justify-self-end sticky top-12 min-h-fit h-fit">
      <h3 class="font-bold">Table of Contents</h3>
      <ul class="mt-4">
        <li>
          <a href="#get" :class="{ 'text-primary': getIsVisible }"
            >Get All Posts</a
          >
        </li>
        <li>
          <a href="#byId" :class="{ 'text-primary': byIdIsVisible }"
            >Get Post By ID</a
          >
        </li>
        <li>
          <a href="#create" :class="{ 'text-primary': createIsVisible }"
            >Create Post</a
          >
        </li>
        <li>
          <a href="#update" :class="{ 'text-primary': updateIsVisible }"
            >Update Post</a
          >
        </li>
        <li>
          <a href="#delete" :class="{ 'text-primary': delIsVisible }"
            >Delete Post</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
