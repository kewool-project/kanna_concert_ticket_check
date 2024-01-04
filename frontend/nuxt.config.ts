// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/global.scss"],
  runtimeConfig: {
    public: {
      BaseUrl: process.env.BASE_URL ?? "http://localhost:3000",
      ServiceDomain: process.env.SERVICE_DOMAIN ?? "http://localhost:8080",
    },
  },
})
