import * as types from './user.constants';
import { UserActionTypes } from './user.types';
import defaultState from '../defaultState';
import { LocalStorage } from '../../../shared/storage';

export interface UserReducerStateType {
  currentUser: any | null,
  error: any,
  isFetching: boolean,
}

export default (
  state: UserReducerStateType = defaultState.user,
  action: UserActionTypes
): UserReducerStateType => {
  switch (action.type) {
    case types.ON_SIGN_IN_START:
      return {
        ...state,
        isFetching: true,
      }
    case types.ON_SIGN_IN_SUCCESS:
      const userToken = { token: action.token };
      new LocalStorage().setItem(action.token);
      
      return {
        ...state,
        currentUser: userToken,
        isFetching: false,
        error: null,
      }
    case types.ON_SIGN_IN_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    case types.ON_SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        isFetching: false,
      }
    case types.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
}