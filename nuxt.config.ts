// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  tailwindcss: {
    viewer: false,
  },
  modules: ["@nuxt/ui", "nuxt-shiki", "@vueuse/nuxt", "nuxt-gtag"],
  runtimeConfig: {
    supabaseUrl: "",
    supabaseKey: "",
  },
  shiki: {
    bundledThemes: ["material-theme-palenight"],
    defaultTheme: {
      dark: "material-theme-palenight",
      light: "material-theme-palenight",
    },
    defaultLang: "typescript",
  },
  ui: {
    icons: ["mdi", "heroicons", "dashicons"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  gtag: {
    id: "G-9FYJ9MEVED",
  },
});
