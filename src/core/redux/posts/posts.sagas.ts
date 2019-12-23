import { takeLatest, put, all, call } from 'redux-saga/effects';

import * as types from './posts.constants';
import * as actions from './posts.actions';
import { errorMessages } from '../../../shared/helpers/errorMessages';

import HTTPClient from '../../httpClient';

function* fetchPostsStart() {
  const http = new HTTPClient();

  try {
    const response = yield http.get('/posts');
    
    if (response) {
      yield put(actions.OnFetchPostsSuccessAction(response.data))
    }
  } catch (error) {
    const { response } = error;
    yield put(actions.OnFetchPostsFailedAction(errorMessages[response.status]))
  }
}

function* onFetchPostsStart() {
  yield takeLatest(types.ON_FETCH_POSTS_START as any, fetchPostsStart)
}


export function* postsSagas() {
  yield all([
    call(onFetchPostsStart),
  ])
}