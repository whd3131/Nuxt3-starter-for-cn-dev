<template>
  <div class="page-index">
    <Hero />
  </div>
</template>
<script setup>
const { t } = useI18n({
  useScope: 'local'
})
</script>
<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
<i18n lang="yaml">
  zh:
    title: 你好，世界!
  
  en:
    title: hello world!
  
</i18n>
