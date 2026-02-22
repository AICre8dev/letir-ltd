import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // Default to dark
      return true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // On mount, ensure dark class is set immediately
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle };
}
