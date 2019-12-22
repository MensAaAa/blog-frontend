import React from 'react';
import { Formik, Field } from 'formik';
import { Container } from 'reactstrap';

import CustomButton from './custom-button.component';
import ErrorFieldComponent from './error-field.component';
import { FormObject } from '../interfaces/form-object';
import '../styles/form.styles.scss';

interface PropsType {
  formObject: FormObject[];
  initialValues: any;
  validationSchema: any;
  className: string;
  backBtn?: boolean;
  signIn?: (loginData) => void;
  errorMessage?: string;
  component?: string | React.ComponentType;
}

const FormComponent = ({ signIn, formObject, errorMessage, initialValues, validationSchema, className, backBtn }: PropsType) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={async (values) => signIn(values)}
  >
    {formikProps => (
      <div className={`${className} d-flex`}>
        <Container>
          <form>
            {formObject.map(({ name, placeholder, type, component }: FormObject) => (
              <div className="form-group" key={name}>
                <Field type={type} name={name} placeholder={placeholder} className="form-control" component={component} />
                <ErrorFieldComponent error={formikProps.errors[name]} touched={formikProps.touched[name]} />
              </div>
            ))}
            <div className="d-flex flex-row flex-wrap justify-content-between">
              <CustomButton name="Potvrdi" customClass="submit" isTypeSubmit={true} onClick={formikProps.handleSubmit} />
              {backBtn &&
                <CustomButton redirectUrl="/dashboard" customClass="cancel" name="Nazad" onClick={formikProps.handleSubmit} />
              }
            </div>
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