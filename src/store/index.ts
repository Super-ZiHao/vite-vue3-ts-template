import testStore from './testStore';

interface AppStore {
  testStore: ReturnType<typeof testStore>
}
const appStore: AppStore = {} as AppStore;
export const registerStore = () => {
  appStore.testStore = testStore();
};
export default appStore;