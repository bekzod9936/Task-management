import * as yup from 'yup';

export interface IFormProps {
  task: string;
}

export const addSchema = yup.object().shape({
  task: yup.string().max(40).nullable(true).required('required'),
});
