import { takeLatest } from 'redux-saga/effects';

import * as purchaseAPI from 'api/purchse';
import { initPurchaseList } from 'redux/modules/purchase';

function* initPurchaseListSaga(action) {}

function* purchaseSaga() {
  yield takeLatest(initPurchaseList, initPurchaseListSaga);
}

export default purchaseSaga;
