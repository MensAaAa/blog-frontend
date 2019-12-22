import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import FormComponent from '../../shared/form/components/form-generator.component';
import withAuth from '../../shared/HOC/components/withAuth';
import { OnSignInStartAction } from '../../../core/redux/user/user.actions';
import { signInObject } from '../constants/sign-in-object';
import { signInSchema } from '../validations';

import '../styles/sign-in.styles.scss';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  signIn: (loginData) => {
    dispatch(OnSignInStartAction(loginData))
  }
});

const mapStateToProps = (state) => ({
  errorMessage: state.user.error,
})

const SignInContainer = (props) => (
  <FormComponent
    formObject={signInObject}
    validationSchema={signInSchema}
    initialValues={{ username: '', password: '' }}
    className="sign-in-form"
    {...props}
  />
)

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(SignInContainer));