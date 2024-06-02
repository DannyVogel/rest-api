<script lang="ts" setup>
const res = ref<any>(null);
const codes = [200, 201, 202, 204, 400, 401, 403, 404, 500];
const code = ref<number>(200);
const good = computed(() => {
  if (code.value >= 200 && code.value < 300) {
    return "green";
  } else {
    return "red";
  }
});
const getStatus = async (code: number) => {
  try {
    res.value = await $fetch(`/api/errors/${code}`, {
      method: "GET",
    });
  } catch (error: Response | any) {
    console.log("error", error);
    res.value = error;
  }
};
const textColor = computed(() => {
  if (
    res.value &&
    res.value?.statusCode >= 200 &&
    res.value?.statusCode < 300
  ) {
    return "text-green-500";
  } else {
    return "text-red-500";
  }
});
</script>

<template>
  <div class="flex gap-4 my-4">
    <USelect v-model="code" :options="codes" color="gray" />
    <UButton :color="good" @click="getStatus(code)">Get {{ code }}</UButton>
  </div>
  <UCard v-if="res">
    <div :class="textColor">
      <p>Status code: {{ res.statusCode }}</p>
      <p>Message: {{ res.message }}</p>
    </div>
  </UCard>
</template>
