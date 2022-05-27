import { call, put, takeLatest } from 'redux-saga/effects';

import * as purchaseAPI from 'api/purchse';
import {
  initPurchaseList,
  initPurchaseListSuccess,
  updateReview,
  updateReviewSuccess,
} from 'redux/modules/purchase';
import { closeModal } from 'redux/modules/modal';

function* initPurchaseListSaga(action) {
  const { data } = yield call(purchaseAPI.fetchPurchaseListAPI);
  yield put(initPurchaseListSuccess(data));
}

function* updateReviewSaga(action) {
  const { id, reviewTitle, content } = action.payload;

  const { data } = yield call(() =>
    purchaseAPI.updateReviewAPI(id, {
      reviewTitle,
      content,
    }),
  );

  yield put(updateReviewSuccess(data));
  yield put(closeModal());
}

function* purchaseSaga() {
  yield takeLatest(initPurchaseList, initPurchaseListSaga);
  yield takeLatest(updateReview, updateReviewSaga);
}

export default purchaseSaga;
