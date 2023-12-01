import React, { useState, useEffect } from 'react';

const LS_THEME = 'theme';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(LS_THEME);
  if (storedTheme) {
    return storedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
};

const initialTheme = getInitialTheme();

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string>(initialTheme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  return (
    <div className="card__toggle">
      <input
        id="themeSwitcher"
        className="ThemeToggle"
        type="checkbox"
        checked={theme === initialTheme}
        onChange={toggleTheme}
      />
    </div>
  );
};
