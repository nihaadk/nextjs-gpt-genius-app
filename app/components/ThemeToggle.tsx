'use client';

import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const enum THEME {
  DIM = 'dim',
  LIGHT = 'light',
}

const ThemeToggle = () => {
  const iconSize: number = 20;
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DIM : THEME.LIGHT;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary btn-sm btn-outline">
      {theme === THEME.LIGHT ? <BsSunFill size={iconSize} /> : <BsMoonFill size={iconSize} />}
    </button>
  );
};

export default ThemeToggle;
