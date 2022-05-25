import { combineReducers, configureStore } from '@reduxjs/toolkit';

import modal from 'redux/modules/modal';
import form from 'redux/modules/form';

const reducer = combineReducers({
  modal,
  form,
});

const store = configureStore({
  reducer,
  devTools: true,
});

export default store;
