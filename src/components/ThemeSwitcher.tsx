import React, { useState, useEffect } from 'react';
import { getInitialTheme } from '../utils/getInitialTheme';
import { LS_THEME } from '../utils/constants';
import { Theme } from '../interfaces/Theme';

const initialTheme = getInitialTheme();

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK);
    document.documentElement.classList.add(theme);
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  return (
    <div className="flex items-center mr-5">
      <input
        id="themeSwitcher"
        className="ThemeToggle"
        type="checkbox"
        checked={theme === Theme.LIGHT}
        onChange={toggleTheme}
      />
    </div>
  );
};
