import { Post } from "./posts.interface";

export interface OnFetchPostsStartInterface {
  type: 'ON_FETCH_POSTS_START',
}

export interface OnFetchPostsSuccessInterface {
  type: 'ON_FETCH_POSTS_SUCCESS',
  posts: any,
}

export interface OnPostsFailedInterface {
  type: 'ON_POSTS_FAILED',
  error: any,
}

export interface OnPostSaveStartInterface {
  type: 'ON_POST_SAVE_START',
  newPost: any,
}

export interface OnPostSaveSuccessInterface {
  type: 'ON_POST_SAVE_SUCCESS',
  post: Post,
}

export interface OnGetPostStartInterface {
  type: 'ON_GET_POST_START',
  path: string,
}

export interface OnGetPostSuccessInterface {
  type: 'ON_GET_POST_SUCCESS',
  post: Post,
}

export interface OnDeletePostStartInterface {
  type: 'ON_DELETE_POST_START',
  id: number,
}

export interface OnDeletePostSuccessInterface {
  type: 'ON_DELETE_POST_SUCCESS',
  id: number,
}

export type PostsActionTypes =
  OnFetchPostsStartInterface
  | OnFetchPostsSuccessInterface
  | OnPostsFailedInterface
  | OnPostSaveStartInterface
  | OnPostSaveSuccessInterface
  | OnGetPostStartInterface
  | OnGetPostSuccessInterface
  | OnDeletePostStartInterface
  | OnDeletePostSuccessInterface;