import { useCallback, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { ReactComponent as IconEyeOpen } from 'assets/icons/eyeopen.svg';
import { ReactComponent as IconEyeClose } from 'assets/icons/eyeclose.svg';

const Password = () => {
  const [open, setOpen] = useState(false);

  const { control } = useFormContext();

  const handleClick = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          type={open ? 'text' : 'password'}
          placeholder="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {open ? <IconEyeOpen /> : <IconEyeClose />}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Password;
