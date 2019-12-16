import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as types from './user.constants';
import * as actions from './user.actions';

function* signInStart(data) {
  console.log(data);
  try {
    const response = null;//yield call();
    if (response) {
      yield put(actions.OnSignInSuccessAction(response.data))
    }
  } catch (error) {
    yield put(actions.OnSignInFailedAction(error.response.data.error_description))
  }
}

function* logoutUser() {
  yield put(actions.OnSignOutSuccessAction());
}

function* resetErrors() {
  yield put(actions.ResetErrorsSuccessAction());
}

function* onSignInStart() {
  yield takeLatest(types.ON_SIGN_IN_START as any, signInStart)
}

function* onSignOutStart() {
  yield takeLatest(types.ON_SIGN_OUT_START as any, logoutUser)
}

function* onResetErrors() {
  yield takeLatest(types.RESET_ERRORS_START as any, resetErrors);
}


export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
    call(onResetErrors),
  ])
}