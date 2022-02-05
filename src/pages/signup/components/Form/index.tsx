import { Button } from '@mui/material';
import styles from './form.module.scss';
import Email from './FormElements/Email';
import { IFormProps } from './form.schema';
import Password from './FormElements/Password';
import { useForm, FormProvider } from 'react-hook-form';
import { auth } from '../../../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Form = () => {
  const methods = useForm<IFormProps>();

  const onSubmit = async ({ email, password }: IFormProps) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
