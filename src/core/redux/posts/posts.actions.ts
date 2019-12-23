import * as types from './posts.constants';

import {
  OnFetchPostsFailedInterface,
  OnFetchPostsStartInterface,
  OnFetchPostsSuccessInterface
} from './posts.types';

export const OnFetchPostsStartAction = (): OnFetchPostsStartInterface => ({
  type: types.ON_FETCH_POSTS_START,
})

export const OnFetchPostsSuccessAction = (posts: any): OnFetchPostsSuccessInterface => ({
  type: types.ON_FETCH_POSTS_SUCCESS,
  posts,
})

export const OnFetchPostsFailedAction = (error: any): OnFetchPostsFailedInterface => ({
  type: types.ON_FETCH_POSTS_FAILED,
  error,
})
