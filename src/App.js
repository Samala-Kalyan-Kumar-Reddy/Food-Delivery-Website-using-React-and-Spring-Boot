import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider} from '@mui/material';
import { darkTheme } from './theme/DarkTheme';
import HomePage from './customer/pages/Homepage/HomePage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <HomePage></HomePage>
    </ThemeProvider>
  );
}

export default App;

