import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

const LocalStorage = {
  setItem: (key: string, value: any) => {
    storage.set(key, JSON.stringify(value));
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
  clear: () => {
    storage.clearAll();
  },
  getAllKeys: () => {
    return storage.getAllKeys();
  },
};

export default LocalStorage;