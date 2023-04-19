import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

export default function Theme() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      </div>
    </ThemeProvider>
  );
}
