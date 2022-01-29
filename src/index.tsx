import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import i18n from 'services/localization';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
        <CssBaseline />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
