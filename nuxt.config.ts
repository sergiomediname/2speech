// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      charset: "utf-8",
      title: "Dictado de Palabras Online - Practica Escritura y Pronunciación",
      meta: [
        {name: "description", content: "Mejora tu ortografía y pronunciación con nuestra web app de dictado de palabras. Configura tu lista, elige el idioma y ajusta el intervalo de tiempo. ¡Pruébala gratis!"},
      ],
      link: [
        {rel: "icon", type: "image/svg+xml", href: "/favicon.svg"}
      ]
    }
  }
})
