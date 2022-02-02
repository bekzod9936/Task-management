import Form from './components/Form';
import styles from './signup.module.scss';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <header>Sign Up</header>
        <Form />
      </div>
    </div>
  );
};

export default SignUp;
