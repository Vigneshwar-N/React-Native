import React, {createContext, useState} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext};
