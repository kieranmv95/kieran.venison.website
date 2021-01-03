import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const selectTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    const preferredTheme = localStorage.getItem('theme');
    const pcs = window.matchMedia('(prefers-color-scheme)');

    if (preferredTheme) {
      setTheme(preferredTheme);
    } else if (pcs.media !== 'not all') {
      selectTheme();
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', selectTheme);
    } else {
      setTheme('light');
    }
  }, []);

  return [theme, toggleTheme];
}
