import { createContext, useState } from 'react';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle';

import { dark, light } from '../styles/Themes';

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);

  function toggleTheme() {
    theme === dark ? setTheme(light) : setTheme(dark);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
