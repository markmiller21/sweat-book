import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Welcome } from './containers';

export const Root = () => (
  <Provider store={store}>
  	<Welcome />
  </Provider>
);
