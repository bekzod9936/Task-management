import AddCard from '../AddCard';
import AddList from '../AddList';
import styles from './body.module.scss';
import { useStore } from 'services/store/addList';

const Body = () => {
  const tasks = useStore((state) => state.tasks);

  return (
    <div className={styles.container}>
      {tasks.map((v, i) => (
        <AddCard title={v} key={i} />
      ))}
      <AddList />
    </div>
  );
};

export default Body;
