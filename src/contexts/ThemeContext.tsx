'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode | undefined;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with undefined to avoid hydration mismatch
  const [theme, setTheme] = useState<ThemeMode | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Update theme - Only run on client side after hydration
  const updateTheme = (newTheme: ThemeMode) => {
    // Only update DOM after component is mounted (client-side only)
    if (!mounted) {
      setTheme(newTheme);
      return;
    }
    
    // Save to localStorage - client side only
    localStorage.setItem('theme', newTheme);
    
    // Update state
    setTheme(newTheme);
    
    // Apply theme to document - client side only
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
      document.querySelector('html')?.setAttribute('style', `color-scheme: ${systemTheme}`);
      
      // Set attribute for Radix themes
      const radixThemes = document.querySelectorAll('.radix-themes');
      radixThemes.forEach(themeEl => {
        (themeEl as HTMLElement).setAttribute('data-radix-theme-mode', systemTheme);
      });
    } else {
      root.setAttribute('data-theme', newTheme);
      document.querySelector('html')?.setAttribute('style', `color-scheme: ${newTheme}`);
      
      // Set attribute for Radix themes
      const radixThemes = document.querySelectorAll('.radix-themes');
      radixThemes.forEach(themeEl => {
        (themeEl as HTMLElement).setAttribute('data-radix-theme-mode', newTheme);
      });
    }
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Only run on client side
    setMounted(true);
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
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
  }, [mounted]); // Only depends on mounted, not theme

  return (
    <ThemeContext.Provider value={{ theme: theme || 'system', setTheme: updateTheme }}>
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
