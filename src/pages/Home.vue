<script lang='ts' setup>
import Test from '@/components/Test.vue';
import { useStore } from '@/store';
const store = useStore();
</script>

<template>
  <div>Home</div>
  <Test />
  <div>{{ store.text }}</div>
  <el-button type="success">Success</el-button>
</template>

<style lang='scss' scoped>

</style>