<template>
  <ClientOnly>
    <el-switch v-model="colorMode" inline-prompt :active-text="t('dark')" :inactive-text="t('light')" size="large"></el-switch>
  </ClientOnly>
</template>

<script setup>
const {t} = useI18n({
  useScope: 'local'
});
const color = useColorMode();
const colorMode = computed({
  get: () => color.value === 'dark',
  set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});
</script>

<i18n lang="yaml">
  zh:
    light: 明亮
    dark: 黑暗

  en:
    light: light
    dark: dark

</i18n>