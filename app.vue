<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: transparent !important;
}

::-webkit-scrollbar-track {
  border-radius: 1rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: linear-gradient(30deg, gray, gray);
  box-shadow: inset 0 0 6px gray;
  cursor: pointer;
}
</style>
