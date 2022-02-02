import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <NavLink to="/">Task-Management</NavLink>
      </div>
      <div className={styles.wraplinks}>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
