import React from 'react';

import FormComponent from '../../shared/form/components/form-generator.component';
import { AddPostObject } from '../constants/add-post-object';
import { AddPostSchema } from '../validations/index';

import '../styles/add-post.styles.scss';

const AddPostContainer = () => (
  <FormComponent
    formObject={AddPostObject}
    validationSchema={AddPostSchema}
    initialValues={{ title: '', content: '' }}
    className="add-post-form"
    backBtn={true}
  />
)

export default AddPostContainer;