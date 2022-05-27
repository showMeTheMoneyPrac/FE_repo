import { call, put, takeLatest } from 'redux-saga/effects';

import * as purchaseAPI from 'api/purchase';
import {
  initPurchaseList,
  initPurchaseListSuccess,
  createReview,
  updateReview,
  updateReviewSuccess,
  createReviewSuccess,
  deleteReview,
  deleteReviewSuccess,
} from 'redux/modules/purchase';
import { closeModal } from 'redux/modules/modal';

function* initPurchaseListSaga(action) {
  const { data } = yield call(purchaseAPI.fetchPurchaseListAPI);
  yield put(initPurchaseListSuccess(data));
}

function* createReviewSaga(action) {
  const { id, reviewTitle, content } = action.payload;

  try {
    const { data } = yield call(() =>
      purchaseAPI.createReviewAPI(id, {
        reviewTitle,
        content,
      }),
    );

    yield put(
      createReviewSuccess({
        orderDetailId: id,
        reviewId: data.reviewId,
        title: data.reviewTitle,
        content: data.content,
      }),
    );
    yield put(closeModal());
  } catch (e) {
    console.log(e);
  }
}

function* updateReviewSaga(action) {
  const { id, reviewTitle, content } = action.payload;

  try {
    const { data } = yield call(() =>
      purchaseAPI.updateReviewAPI(id, {
        reviewTitle,
        content,
      }),
    );

    yield put(updateReviewSuccess(data));
    yield put(closeModal());
  } catch (e) {
    console.log(e);
  }
}

function* deleteReviewSaga(action) {
  try {
    yield call(() => purchaseAPI.deleteReviewAPI(action.payload));

    yield put(deleteReviewSuccess(action.payload));
  } catch (e) {
    console.log(e);
  }
}

function* purchaseSaga() {
  yield takeLatest(initPurchaseList, initPurchaseListSaga);
  yield takeLatest(updateReview, updateReviewSaga);
  yield takeLatest(createReview, createReviewSaga);
  yield takeLatest(deleteReview, deleteReviewSaga);
}

export default purchaseSaga;
