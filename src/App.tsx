import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ToggleThemeContext } from './context/ToggleThemeContext';
import usePersistedState from './utils/usePersistedState';
import Home from './pages/Home';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('dev-finder:theme', light);

  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <ToggleThemeContext.Provider value={{ toggleTheme: handleToggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  )
}

export default App;