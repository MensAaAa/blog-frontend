import React from 'react';
import { FormikProps } from 'formik';

import 'react-quill/dist/quill.snow.css';

interface PropsType {
  field: any;
  form: FormikProps<any>;
  placeholder: string;
  className: string;
}

class EditorComponent extends React.PureComponent<PropsType, {}> {
  private quill = null;

  state = {
    loading: true,
  }

  componentDidMount() {
    if (document) {
      this.quill = require('react-quill');
      this.setState(() => ({
        loading: false,
      }))
    }
  }

  render() {
    const { placeholder, form, field } = this.props;
    const { loading } = this.state;
    const Quill = this.quill;
    if (loading) return <div />

    return (
      <React.Fragment>
        {Quill &&
          <Quill value={field.value} onChange={(val) => form.setFieldValue('content', val)} placeholder={placeholder} />
        }
      </React.Fragment>
    )
  }
}

export default EditorComponent;