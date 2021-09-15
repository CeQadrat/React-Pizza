import React, { createContext, useContext, FC } from 'react';

import { RootStore } from 'stores/RootStore';
import { IRootStore } from 'stores/IRootStore';

export const StoreContext = createContext<IRootStore | null>(null);

export const StoreProvider: FC = ({ children }) => {
  const rootStore = new RootStore();
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = (): IRootStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
