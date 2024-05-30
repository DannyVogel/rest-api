// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    viewer: false,
  },
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui"],
});
