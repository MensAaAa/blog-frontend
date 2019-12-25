import * as types from './posts.constants';

import {
  OnPostsFailedInterface,
  OnFetchPostsStartInterface,
  OnFetchPostsSuccessInterface,
  OnPostSaveStartInterface,
  OnPostSaveSuccessInterface,
  OnGetPostStartInterface,
  OnGetPostSuccessInterface,
} from './posts.types';
import { Post } from './posts.interface';

export const OnFetchPostsStartAction = (): OnFetchPostsStartInterface => ({
  type: types.ON_FETCH_POSTS_START,
})

export const OnFetchPostsSuccessAction = (posts: any): OnFetchPostsSuccessInterface => ({
  type: types.ON_FETCH_POSTS_SUCCESS,
  posts,
})

export const OnPostsFailedAction = (error: any): OnPostsFailedInterface => ({
  type: types.ON_POSTS_FAILED,
  error,
})

export const OnPostSaveStartAction = (newPost): OnPostSaveStartInterface => ({
  type: types.ON_POST_SAVE_START,
  newPost,
})

export const OnPostSaveSuccessAction = (post: Post): OnPostSaveSuccessInterface => ({
  type: types.ON_POST_SAVE_SUCCESS,
  post,
})

export const OnGetPostStartAction = (path: string): OnGetPostStartInterface => ({
  type: types.ON_GET_POST_START,
  path,
})

export const OnGetPostSuccessAction = (post: Post) : OnGetPostSuccessInterface => ({
  type: types.ON_GET_POST_SUCCESS,
  post,
})
