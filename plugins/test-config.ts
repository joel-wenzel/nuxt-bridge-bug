export default defineNuxtPlugin(({ nuxt2Context }) => {
  console.log('nuxt2Context.$config', nuxt2Context.$config)
  console.log('useRuntimeConfig', useRuntimeConfig())
})
