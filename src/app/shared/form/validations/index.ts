import * as yup from 'yup';

export const signInSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required().min(3),
})

