import * as types from './user.constants';
import {
  OnSignInSuccessInterface,
  OnSignInFailedInterface,
  OnSignInStartInterface,
  OnSignOutSuccessInterface,
  OnSignOutStartInterface,
  ResetErrorsStartInterface,
  ResetErrorsSuccessInterface,
} from './user.types';

export const OnSignInStartAction = (loginData: any): OnSignInStartInterface => ({
  type: types.ON_SIGN_IN_START,
  loginData,
})

export const OnSignInSuccessAction = (token: string): OnSignInSuccessInterface => ({
  type: types.ON_SIGN_IN_SUCCESS,
  token,
})

export const OnSignInFailedAction = (error: any): OnSignInFailedInterface => ({
  type: types.ON_SIGN_IN_FAILED,
  error,
})

export const OnSignOutStartAction = (): OnSignOutStartInterface => ({
  type: types.ON_SIGN_OUT_START,
})

export const OnSignOutSuccessAction = (): OnSignOutSuccessInterface => ({
  type: types.ON_SIGN_OUT_SUCCESS,
})

export const ResetErrorsStartAction = (): ResetErrorsStartInterface => ({
  type: types.RESET_ERRORS_START,
})

export const ResetErrorsSuccessAction = (): ResetErrorsSuccessInterface => ({
  type: types.RESET_ERRORS_SUCCESS,
})