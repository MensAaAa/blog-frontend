import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';
import PostsReducer from './posts/posts.reducer';

const rootReducer = combineReducers({
	user: UserReducer,
	posts: PostsReducer,
})

export default rootReducer;