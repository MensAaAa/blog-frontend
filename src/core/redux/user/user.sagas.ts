import { takeLatest, put, all, call } from 'redux-saga/effects';
import Router from 'next/router';

import * as types from './user.constants';
import * as actions from './user.actions';
import { errorMessages } from '../../../shared/helpers/errorMessages';

import HTTPClient from '../../httpClient';

function* signInStart(data) {
  const http = new HTTPClient();
  try {
    const response = yield http.post('/auth/login', data.loginData);
    
    if (response) {
      yield put(actions.OnSignInSuccessAction(response.data.token))
      Router.push('/dashboard');
    }
  } catch (error) {
    const { response } = error;
    yield put(actions.OnSignInFailedAction(errorMessages[response.status]))
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