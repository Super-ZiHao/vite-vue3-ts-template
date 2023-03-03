<script lang='ts' setup>
import appStore from '@/store';
import { successMessage } from '@/utils';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { text, num } = storeToRefs(appStore.testStore);
const { add, remove } = appStore.testStore;
</script>

<template>
  <div>Home</div>
  <Test />
  <div>{{ text }}</div>
  <div>{{ num }}</div>
  <ElButton @click="add">+1</ElButton>
  <ElButton @click="remove">-1</ElButton>
  <ElButton type="success" @click="successMessage">Success</ElButton>
  <ElButton type="warning" @click="toggleDark()">切换主题</ElButton>
</template>

<style lang='scss' scoped>
div {
  position: relative;
  width: 100px;
}
</style>