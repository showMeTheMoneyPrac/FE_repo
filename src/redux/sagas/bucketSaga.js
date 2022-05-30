import { call, put, takeLatest } from 'redux-saga/effects';

import * as bucketAPI from 'api/bucket';
import {
  initBucketList,
  initBucketListSuccess,
  removeBucketItem,
  removeBucketItemSuccess,
} from 'redux/modules/bucket';

function* initBucketListSaga(action) {
  try {
    const { data } = yield call(bucketAPI.fetchBucketListAPI);
    yield put(initBucketListSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* removeBucketItemSaga(action) {
  const cartId = action.payload;
  try {
    const { data } = yield call(() => bucketAPI.deleteBucketItemAPI(cartId));
    yield put(removeBucketItemSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* bucketSaga() {
  yield takeLatest(initBucketList, initBucketListSaga);
  yield takeLatest(removeBucketItem, removeBucketItemSaga);
}

export default bucketSaga;
