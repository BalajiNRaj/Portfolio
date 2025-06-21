'use client';

import React, { useEffect } from 'react';

/**
 * This component safely applies theme settings only on the client side after hydration
 * to avoid React hydration mismatches.
 */
export default function ThemeInitializer() {
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.style.colorScheme = savedTheme;
        
        // Apply theme to Radix components
        const radixThemes = document.querySelectorAll('.radix-themes');
        radixThemes.forEach(theme => {
          theme.setAttribute('data-radix-theme-mode', savedTheme);
        });
      } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme);
        document.documentElement.style.colorScheme = systemTheme;
        
        // Apply theme to Radix components
        const radixThemes = document.querySelectorAll('.radix-themes');
        radixThemes.forEach(theme => {
          theme.setAttribute('data-radix-theme-mode', systemTheme);
        });
      }
    } catch (e) {
      // Fallback to dark theme
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
      
      // Apply theme to Radix components as fallback
      const radixThemes = document.querySelectorAll('.radix-themes');
      radixThemes.forEach(theme => {
        theme.setAttribute('data-radix-theme-mode', 'dark');
      });
    }
  }, []);
  
  return null;
}
