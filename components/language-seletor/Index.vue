<script setup lang="ts">
const { t, locale, locales } = useI18n({
    useScope: 'local',
})
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})
const selected = ref(availableLocales.value.filter(item => item.code === locale.code)[0]?.name || '')

watch(() => selected.value, (val) => {
    try {
        switchLocalePath(val)
        let path = window.location.href.split(window.location.origin)[1];

        locales.value.forEach((item) => {
            if (path.startsWith('/' + item.code)) {
                path = path.replace('/' + item.code, '/' + val)
            }
        })

        if (path === '/') {
            path = '/' + val
        }

        window.location.assign(window.location.origin + path);
    } catch (error) {
        window.location.assign(window.location.href);
    }

})
</script>

<template>
    <el-select v-model="selected" class="m-2 w-[160px]" :placeholder="t('selectLanguage')" size="large">
        <el-option v-for="item in availableLocales" :key="item.code" :label="item.name" :value="item.code">
          <div class="flex items-center">
            <img :src="`/flags/${item.flag}.svg`" class="w-8 h-8 mr-8">
            <span>{{item.name}}</span>
          </div>
        </el-option>
    </el-select>
</template>

<style scoped></style>

<i18n lang="yaml">
zh:
  selectLanguage: 选择语言

en:
  selectLanguage: Language
</i18n>