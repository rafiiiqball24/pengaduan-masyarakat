import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  if (config.public.googleClientId) {
    nuxtApp.vueApp.use(vue3GoogleLogin, {
      clientId: config.public.googleClientId
    })
  } else {
    console.warn('Google Client ID is missing. Google Login will not work.')
  }
})
