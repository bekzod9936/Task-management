import { useState } from 'react';
import { auth } from 'firebase-config';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const NavBar = () => {
  const [user, setUser]: any = useState({});

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const LogOut = async () => {
    await signOut(auth);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <NavLink to="/">Task-Management</NavLink>
      </div>
      <div className={styles.wraplinks}>
        {user?.email ? (
          <NavLink to="/login" onClick={LogOut}>
            Log Out
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
