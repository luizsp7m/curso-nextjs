import { createContext, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle';

import { dark, light } from '../styles/Themes';

import { AppProvider } from '../contexts/AppContext';
import { AuthProvider } from '../contexts/AuthContext';

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    if(theme === dark) {
      setTheme(light);
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(dark);
      localStorage.setItem('theme', 'dark');
    }
  }

  useEffect(() => {
    const themeStorage = localStorage.getItem('theme');
    themeStorage === 'dark' ? setTheme(dark) : setTheme(light);
  }, []);

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    </AuthProvider>
  )
}
