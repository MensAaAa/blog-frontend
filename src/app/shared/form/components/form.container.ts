import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import FormComponent from './form.component';
import { OnSignInStartAction } from '../../../../core/redux/user/user.actions';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  signIn: (loginData) => {
    dispatch(OnSignInStartAction(loginData))
  }
});

export default connect(null, mapDispatchToProps)(FormComponent)