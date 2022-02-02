import * as yup from 'yup';

export interface IFormProps {
  email: string;
  password: string;
  confirm: string;
}

export const addSchema = yup.object().shape({
  email: yup.string().email().nullable(true).required('required'),
  password: yup.string().min(6).nullable(true).required('required'),
  confirm: yup.string().min(6).nullable(true).required('required'),
});
