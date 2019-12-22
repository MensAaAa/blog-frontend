import * as yup from 'yup';

export const AddPostSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
})