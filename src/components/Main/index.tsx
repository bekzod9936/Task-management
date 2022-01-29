import AddList from 'components/AddList';
import styles from './Main.module.scss';
import { useStore } from 'services/store/addList';

const Main = () => {
  const tasks = useStore((state) => state.tasks);

  return (
    <div className={styles.container}>
      <AddList />
      <ul>
        {tasks.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
