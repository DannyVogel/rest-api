// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  tailwindcss: {
    viewer: false,
  },
  modules: ["@nuxt/ui", "nuxt-shiki"],
  runtimeConfig: {
    supabaseUrl: "",
    supabaseKey: "",
  },
  shiki: {
    bundledThemes: ["github-dark-default"],
    defaultTheme: {
      dark: "github-dark-default",
      light: "github-dark-default",
    },
    defaultLang: "typescript",
  },
});
