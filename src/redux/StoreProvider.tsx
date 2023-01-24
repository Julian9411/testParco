import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import getStore from './store';

const {persistor, store} = getStore;
const StoreProvider: FC<{children: React.ReactNode}> = ({children}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default StoreProvider;
