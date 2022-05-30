import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUserInfo, fetchUserInfoSuccess } from 'redux/modules/user';
import * as userAPI from 'api/user';

function* fetchUserAddressSaga(action) {
  try {
    const { data } = yield call(userAPI.fetchUserInfoAPI);
    yield put(fetchUserInfoSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  yield takeLatest(fetchUserInfo, fetchUserAddressSaga);
}

export default userSaga;
