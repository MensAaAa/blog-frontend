import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['']
}

const initialState = {
  posts: {
    all: []
  }
}

const TestReducer = (state = initialState , action) => {
  console.log(state)
  switch(action.type) {
    default:
      return null;
  }
}

const rootReducer = combineReducers({
	posts: TestReducer,
})

export default persistReducer(persistConfig, rootReducer);