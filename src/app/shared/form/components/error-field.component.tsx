import React from 'react';
import { FormikTouched, FormikErrors } from 'formik'

import '../styles/error-field.styles.scss';

interface PropsType {
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[],
  touched: boolean | FormikTouched<any> | FormikTouched<any>[],
}

const ErrorFieldComponent = ({ error, touched }: PropsType) => (
  <React.Fragment>
    {error && touched &&
      <div className="error-message mt-1">
        <span>{error}</span>
      </div>
    }
  </React.Fragment>

)

export default ErrorFieldComponent;