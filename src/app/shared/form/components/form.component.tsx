import React from 'react';
import { Formik, Field } from 'formik';
import { Container } from 'reactstrap';

import CustomButton from './custom-button.component';
import '../styles/form.styles.scss';

interface PropsType {
  signIn: (loginData) => void;
}

const FormComponent = (props: PropsType) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values) => props.signIn(values)}
  >
    {formikProps => (
      <div className="custom-form">
        <Container>
          <form>
            <div className="form-group">
              <Field type="text" name="username" placeholder="Username" className="form-control" />
            </div>
            <div className="form-group">
              <Field type="password" name="password" placeholder="Password" className="form-control" />
            </div>
            <CustomButton name="Submit" isTypeSubmit={true} onClick={formikProps.handleSubmit}/>
          </form>
        </Container>
      </div>
    )}
  </Formik>
)

export default FormComponent;