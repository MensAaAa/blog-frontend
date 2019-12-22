import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import FormComponent from './form-generator.component';
import withAuth from '../../HOC/components/withAuth';
import { OnSignInStartAction } from '../../../../core/redux/user/user.actions';
import { signInObject } from '../constants/sign-in-object';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  signIn: (loginData) => {
    dispatch(OnSignInStartAction(loginData))
  }
});

const mapStateToProps = (state) => ({
  errorMessage: state.user.error,
})

const SignInContainer = (props) => (
  <FormComponent formObject={signInObject} {...props} />
)

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(SignInContainer));