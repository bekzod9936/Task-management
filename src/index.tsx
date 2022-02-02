import 'index.css';
import App from 'app';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import i18n from 'services/localization';
import reportWebVitals from 'reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
        <CssBaseline />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
