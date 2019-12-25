import { UserReducerStateType } from "./user/user.reducer";
import { PostsReducerStateType } from "./posts/posts.reducer";

export interface GlobalStateAppType {
  user: UserReducerStateType,
  posts: PostsReducerStateType,
}

export default {
  user: {
    currentUser: { token: '' },
    isFetching: false,
    error: null,
  },
  posts: {
    posts: null,
    selectedPost: null,
    isFetching: false,
    error: null,
  }
}