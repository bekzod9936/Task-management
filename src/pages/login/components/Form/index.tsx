import { Button } from '@mui/material';
import styles from './form.module.scss';
import Email from './FormElements/Email';
import { IFormProps } from './form.schema';
import Password from './FormElements/Password';
import { auth } from '../../../../firebase-config';
import { useForm, FormProvider } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Form = () => {
  const methods = useForm<IFormProps>();

  const onSubmit = async ({ email, password }: IFormProps) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        <Password />
        <Button className={styles.button} type={'submit'}>
          Log In
        </Button>
        <div className={styles.wraplink}>
          <a href="/">Forget password ?</a>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
