import styles from './AddList.module.scss';
import { useCallback, useState, memo } from 'react';
import { useStore } from 'services/store/addList';
import { addSchema, IFormProps } from './add.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Button, IconButton, TextField } from '@mui/material';
import { ReactComponent as IconClose } from 'assets/icons/close.svg';

const AddList = () => {
  const [open, setOpen] = useState(true);
  const setTasks = useStore((state) => state.setTasks);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormProps>({
    resolver: yupResolver(addSchema),
    mode: 'onChange',
  });

  const onSubmit = (v: any) => {
    setTasks(v.task);
    reset({ task: '' });
  };

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.container}>
      {open ? (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wraplist}>
          <Controller
            name="task"
            control={control}
            render={({ field }) => (
              <TextField {...field} className={styles.input} />
            )}
          />
          <div>
            <Button type="submit" className={styles.button}>
              Add list
            </Button>
            <IconButton onClick={handleOpen}>
              <IconClose />
            </IconButton>
          </div>
        </form>
      ) : (
        <div>
          <Button onClick={handleOpen}>+ Add a list</Button>
        </div>
      )}
    </div>
  );
};

export default memo(AddList);
