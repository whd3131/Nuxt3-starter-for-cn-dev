<template>
  <div class="page-index">
<!--    <h1 class="text-3xl font-bold underline">-->
<!--      {{ t('title') }}-->
<!--    </h1>-->
<!--    <Logos />-->
<!--    <Examples />-->

<!--    <Hero />-->

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
