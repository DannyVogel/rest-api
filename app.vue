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
  margin: 5px;
  border-radius: 1rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: linear-gradient(30deg, #172554, #172554);
  box-shadow: inset 0 0 6px #172554;
  cursor: pointer;
}
</style>
