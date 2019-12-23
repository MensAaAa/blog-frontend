export interface OnFetchPostsStartInterface {
  type: 'ON_FETCH_POSTS_START',
}

export interface OnFetchPostsSuccessInterface {
  type: 'ON_FETCH_POSTS_SUCCESS',
  posts: any,
}

export interface OnFetchPostsFailedInterface {
  type: 'ON_FETCH_POSTS_FAILED',
  error: any,
}

export type PostsActionTypes = OnFetchPostsStartInterface 
| OnFetchPostsSuccessInterface 
| OnFetchPostsFailedInterface;