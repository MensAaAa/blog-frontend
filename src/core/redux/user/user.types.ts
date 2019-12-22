export interface OnSignInStartInterface {
  type: 'ON_SIGN_IN_START',
  loginData: any,
}

export interface OnSignInSuccessInterface {
  type: 'ON_SIGN_IN_SUCCESS',
  token: string,
}

export interface OnSignInFailedInterface {
  type: 'ON_SIGN_IN_FAILED',
  error: any,
}

export interface OnSignOutSuccessInterface {
  type: 'ON_SIGN_OUT_SUCCESS',
}

export interface OnSignOutStartInterface {
  type: 'ON_SIGN_OUT_START',
}

export interface ResetErrorsStartInterface {
  type: 'RESET_ERRORS_START',
}

export interface ResetErrorsSuccessInterface {
  type: 'RESET_ERRORS_SUCCESS',
}


export type UserActionTypes = OnSignInStartInterface 
| OnSignInSuccessInterface 
| OnSignInFailedInterface 
| OnSignOutSuccessInterface 
| ResetErrorsStartInterface
| ResetErrorsSuccessInterface;