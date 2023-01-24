import {configureStore} from '@reduxjs/toolkit';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore, Storage} from 'redux-persist';
import appReducer from './slices';

const storage = new MMKV();

const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root-coat-color',
  storage: reduxStorage,
};

const createDebugger = require('redux-flipper').default;

const persistedReducer = persistReducer(persistConfig, appReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false}).concat(
      createDebugger(),
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
const persistor = persistStore(store);
export default {store, persistor};
