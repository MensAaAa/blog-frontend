import defaultState from '../defaultState';
import { PostsActionTypes } from './posts.types';
import * as types from './posts.constants';
import { Post } from './posts.interface';

export interface PostsReducerStateType {
  posts: Post[] | null,
  error: any,
  isFetching: boolean,
}

export default (
  state: PostsReducerStateType = defaultState.posts,
  action: PostsActionTypes
): PostsReducerStateType => {
  switch (action.type) {
    case types.ON_FETCH_POSTS_START:
    case types.ON_POST_SAVE_START:
      return {
        ...state,
        isFetching: true,
      }
    case types.ON_FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
      }
      case types.ON_POST_SAVE_SUCCESS: 
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    case types.ON_POSTS_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
}