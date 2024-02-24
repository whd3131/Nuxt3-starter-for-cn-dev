<script setup>
const { t } = useI18n({
  useScope: 'local'
})

useHead({
  title: t('title'),
  meta: [
    { name: 'description', content: t('description') },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'canonical', href: 'https://sora.cand.top/' },
    { name: 'msvalidate.01', content: 'D803FD1ECAA04C4BC8D496BACC19D164' }, // bing
    { name: 'yandex-verification', content: '9c03db9db4f44d55'} // yandex
  ],
  script: [
    {
      src: 'https://us.umami.is/script.js',
      'data-website-id': '99c45063-eb22-40fb-b051-81d984fd27d5'
    },
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'sora.cand.top'
    }
  ]
})
</script>

<template>
    <el-container>
      <CustomerHeader />
      <el-main>
        <NuxtPage />
      </el-main>
      <el-footer>
        <CustomerFooter />
      </el-footer>
    </el-container>
</template>

<i18n lang="yaml">
zh:
  title: 你好，世界!
  description: 现在你可以在这里找到一些有趣的东西
en:
  title: hello world!
  description: Now you can find something interesting here

</i18n>
