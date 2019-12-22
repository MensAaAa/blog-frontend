import React from 'react';

interface PropsType {
  error: string,
  touched: boolean,
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