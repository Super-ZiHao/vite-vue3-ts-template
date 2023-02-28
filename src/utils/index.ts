import appStore from '@/store';
import { storeToRefs } from 'pinia';

export const successMessage = () => {
  const { num } = storeToRefs(appStore.testStore);
  ElMessage({
    message: `成功，当前-${num.value}`,
    type: 'success',
  });
};