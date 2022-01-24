import AddList from "components/AddList";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <div>
        <AddList />
      </div>
    </div>
  );
};

export default Main;
