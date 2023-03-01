const testStore = defineStore('home', () => {
  const text = ref('使用pinia');
  const num = ref(1);

  const add = () => {
    num.value = num.value + 1;
  };
  const remove = () => {
    num.value = num.value - 1;
  };
  return {
    text,
    num,
    add,
    remove
  };
});

export default testStore;
