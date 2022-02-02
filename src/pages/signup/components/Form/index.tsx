import { Button } from '@mui/material';
import styles from './form.module.scss';
import Email from './FormElements/Email';
import { IFormProps } from './form.schema';
import Password from './FormElements/Password';
import { useForm, FormProvider } from 'react-hook-form';

const Form = () => {
  const methods = useForm<IFormProps>();

  const onSubmit = (values: IFormProps) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.container}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Email />
        <Password name="password" />
        <Password name="confirm" />
        <Button className={styles.button} type={'submit'}>
          Sign Up
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
