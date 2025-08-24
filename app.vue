<template>
  <NuxtLayout>
    <!-- <Whatsapp /> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
// import Whatsapp from '@/components/global/whatsapp/Whatsapp.vue'

const router = useRouter()

useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',

  // Title and Description
  title: 'Nome do projeto',
  ogTitle: 'Descrição do projeto',
  description: 'Descrição do projeto',
  ogDescription: 'Descrição do projeto',
  canonical: 'URL do website',
  keywords: 'palavras chave',
  robots: 'index, follow',
  googlebot: 'max-image-preview:large',
  author: 'Nome da empresa',

  // Favicons e manifest - CORRIGIDO
  link: [
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },  
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],

  // Theme
  themeColor: '#ffff',
  msapplicationTileColor: '#ffff',
  appleMobileWebAppStatusBarStyle: 'default',

  // Open Graph - SEM IMAGEM
  ogType: 'website',
  ogUrl: 'URL do website',
  ogSiteName: 'Nome do website',
  ogLocale: 'pt_BR',

  // App specific
  applicationName: 'Nome do website',
  appleMobileWebAppTitle: 'Nome do website',
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>
