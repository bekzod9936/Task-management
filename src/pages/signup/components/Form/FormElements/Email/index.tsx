import { TextField, InputAdornment } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { ReactComponent as IconMessage } from 'assets/icons/message.svg';

const Email = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field }) => (
        <TextField
          type={'email'}
          {...field}
          placeholder="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconMessage />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Email;
