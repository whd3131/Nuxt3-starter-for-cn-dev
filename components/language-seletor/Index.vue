<script setup lang="ts">
const { t, locale } = useI18n({
    useScope: 'local',
})

const selected = ref('')
const options = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'zh',
        label: '中文',
    }

]

function changeLocale(language: any) {
    locale.value = language;
    window.location.assign("/" + language)
}

watch(() => selected.value, (val) => {
    console.log(val);
    changeLocale(val)
})
</script>

<template>
    <el-select v-model="selected" class="m-2" :placeholder="t('selectLanguage')" size="large" style="width: 240px">
        <el-option v-for="   item    in    options   " :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<style scoped></style>

<i18n lang="yaml">
zh:
  selectLanguage: 选择语言

en:
  selectLanguage: Language
</i18n>