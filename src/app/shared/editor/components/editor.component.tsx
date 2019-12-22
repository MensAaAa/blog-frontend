import React from 'react';
import {  FormikProps } from 'formik';

import 'react-quill/dist/quill.snow.css';

interface PropsType {
  field: any;
  form: FormikProps<any>;
  placeholder: string;
  className: string;
}

class EditorComponent extends React.PureComponent<PropsType, {}> {
  private quill = null;

  constructor(props) {
    super(props);

    if (document) {
      this.quill = require('react-quill');
    }
  }
  render() {
    const { field, placeholder } = this.props;
    const Quill = this.quill;

    return (
      <React.Fragment>
        {Quill &&
          <Quill value={field.value} onChange={field.onChange} placeholder={placeholder} />
        }
      </React.Fragment>
    )
  }
}

export default EditorComponent;