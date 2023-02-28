<script lang='ts' setup>
import Test from '@/components/Test.vue';
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
  <el-button @click="add">+1</el-button>
  <el-button @click="remove">-1</el-button>
  <el-button type="success" @click="successMessage">Success</el-button>
</template>

<style lang='scss' scoped>

</style>