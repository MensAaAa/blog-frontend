import { FormObject } from '../interfaces/form-object';

export const signInObject: FormObject[] = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  }
]