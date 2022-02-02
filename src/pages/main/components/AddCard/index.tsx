import { Button, IconButton, TextField } from '@mui/material';
import { ReactComponent as IconDots } from 'assets/icons/dots.svg';
import styles from './addcard.module.scss';

interface Props {
  title: string;
}

const AddCard = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <header>
        <div>{title}</div>
        <IconButton>
          <IconDots />
        </IconButton>
      </header>
      <Button> + Add a card</Button>
      <TextField
        autoComplete="off"
        autoFocus={true}
        placeholder="Enter a title "
        multiline
        minRows={2}
        maxRows={2}
      />
    </div>
  );
};

export default AddCard;
