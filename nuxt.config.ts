// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    apiSecret: "",
    public: {
      baseUrl: "",
      apiKey: "",
    },
  },
  // Disable to avoid reaching image optimization limit :-)
  // image: {
  //   format: "webp",
  //   domains: ["spoonacular.com", "brfenergi.se"],
  // },
});
