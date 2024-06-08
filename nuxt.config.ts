// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  tailwindcss: {
    viewer: false,
  },
  modules: ["@nuxt/ui", "nuxt-shiki"],
  runtimeConfig: {
    supabaseUrl: "",
    supabaseKey: "",
  },
  shiki: {
    bundledThemes: ["github-dark-default", "github-light-default"],
    defaultTheme: {
      dark: "github-dark-default",
      light: "github-light-default",
    },
    defaultLang: "typescript",
  },
  ui: {
    icons: ["mdi", "heroicons", "dashicons"],
  },
});
