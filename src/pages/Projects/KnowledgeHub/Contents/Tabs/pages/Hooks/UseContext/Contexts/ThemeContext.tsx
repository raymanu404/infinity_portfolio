import { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark';

const defaultTheme: Theme = 'light';

const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return theme;
};

export { ThemeProvider, useThemeContext };
