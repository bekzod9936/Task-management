import Form from './components/Form';
import styles from './login.module.scss';

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <header>Log In</header>
        <Form />
      </div>
    </div>
  );
};

export default LogIn;
