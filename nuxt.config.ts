// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    viewer: false,
  },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    supabaseUrl: "",
    supabaseKey: "",
  },
});
