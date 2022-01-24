import NavBar from "../components/NavBar";
import Main from "../components/Main";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
