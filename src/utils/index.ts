import appStore from '@/store';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';

export const successMessage = () => {
  const { num } = storeToRefs(appStore.testStore);
  ElMessage({
    message: `成功，当前-${num.value}`,
    type: 'success',
  });
};