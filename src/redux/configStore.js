import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import modal from 'redux/modules/modal';
import form from 'redux/modules/form';
import purchase from 'redux/modules/purchase';
import user from 'redux/modules/user';
import product from 'redux/modules/product';
import rootSaga from 'redux/sagas';

const reducer = combineReducers({
  modal,
  form,
  purchase,
  user,
  product,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
