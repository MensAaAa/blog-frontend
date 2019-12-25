import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import FormComponent from '../../shared/form/components/form-generator.component';
import { AddPostObject } from '../constants/add-post-object';
import { AddPostSchema } from '../validations/index';
import { OnPostSaveStartAction } from '../../../core/redux/posts/posts.actions';

import '../styles/add-post.styles.scss';

interface PropsType {
  savePost: (newPost: any) => void;
}

const AddPostContainer = ({ savePost }: PropsType) => (
  <FormComponent
    formObject={AddPostObject}
    validationSchema={AddPostSchema}
    initialValues={{ title: '', path: '', content: '' }}
    className="add-post-form"
    backBtn={true}
    signIn={savePost}
  />
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  savePost: (newPost) => (dispatch(OnPostSaveStartAction(newPost)))
})

export default connect(null, mapDispatchToProps)(AddPostContainer);