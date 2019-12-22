import React from 'react';
import { Formik, Field } from 'formik';
import { Container } from 'reactstrap';

import { signInSchema } from '../validations';
import CustomButton from './custom-button.component';
import ErrorFieldComponent from './error-field.component';
import { FormObject } from '../interfaces/form-object';
import '../styles/form.styles.scss';

interface PropsType {
  formObject: FormObject[];
  signIn?: (loginData) => void;
  errorMessage?: string;
}

const FormComponent = ({ signIn, formObject, errorMessage }: PropsType) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={signInSchema}
    onSubmit={async (values) => signIn(values)}
  >
    {formikProps => (
      <div className="custom-form">
        <Container>
          <form>
            {formObject.map(({ name, placeholder, type }: FormObject) => (
              <div className="form-group" key={name}>
                <Field type={type} name={name} placeholder={placeholder} className="form-control" />
                <ErrorFieldComponent error={formikProps.errors[name]} touched={formikProps.touched[name]} />
              </div>
            ))}
            <CustomButton name="Submit" isTypeSubmit={true} onClick={formikProps.handleSubmit} />
            {errorMessage &&
              <span className="error-message mt-5">{errorMessage}</span>
            }
          </form>
        </Container>
      </div>
    )}
  </Formik>
)

export default FormComponent;