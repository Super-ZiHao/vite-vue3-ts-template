import { defineStore } from 'pinia';

export const useStore = defineStore('home', {
  state: () => ({
    text: '使用pinia'
  })
});