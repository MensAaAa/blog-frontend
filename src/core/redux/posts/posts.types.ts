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
 
export type PostsActionTypes = 
  OnFetchPostsStartInterface 
| OnFetchPostsSuccessInterface 
| OnPostsFailedInterface
| OnPostSaveStartInterface
| OnPostSaveSuccessInterface;