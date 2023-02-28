<script lang='ts' setup>
import appStore from '@/store';
import { storeToRefs } from 'pinia';
import { successMessage } from '@/utils';
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
</template>

<style lang='scss' scoped>

</style>