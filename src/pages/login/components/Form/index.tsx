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
