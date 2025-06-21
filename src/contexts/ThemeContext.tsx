'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Update theme
  const updateTheme = (newTheme: ThemeMode) => {
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
    
    // Update state
    setTheme(newTheme);
    
    // Apply theme to document
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
      document.querySelector('html')?.setAttribute('style', `color-scheme: ${systemTheme}`);
    } else {
      root.setAttribute('data-theme', newTheme);
      document.querySelector('html')?.setAttribute('style', `color-scheme: ${newTheme}`);
    }
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    
    // Get saved theme from localStorage
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as ThemeMode : null;
    
    if (savedTheme) {
      updateTheme(savedTheme);
    } else {
      // Default to system
      updateTheme('system');
    }
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme('system'); // Re-apply system theme
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
