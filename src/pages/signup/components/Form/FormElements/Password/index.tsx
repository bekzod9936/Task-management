import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface Props {
  name: string;
}

const Password = ({ name }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type={'password'}
          placeholder={name === 'password' ? 'Password' : 'Confirm Password'}
        />
      )}
    />
  );
};

export default Password;
