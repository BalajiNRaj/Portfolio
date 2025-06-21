'use client';

import React, { useEffect, useState } from 'react';
import { Theme } from '@radix-ui/themes';
import { useTheme } from '@/contexts/ThemeContext';
import ClientOnly from './ClientOnly';

interface ThemeScriptProps {
  children: React.ReactNode;
}

export function RadixThemeWrapper({ children }: ThemeScriptProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Convert our theme to Radix appearance
  const appearance = theme === 'system' 
    ? 'inherit' 
    : theme;
  
  // Effect to sync theme with DOM - only run on client
  useEffect(() => {
    setMounted(true);
    
    if (!mounted) return;
    
    const updateRadixThemes = () => {
      // Handle both defined and undefined theme values safely
      const themeValue = theme || 'system';
      
      const currentTheme = themeValue === 'system' 
        ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        : themeValue;
        
      // Set data attribute on Radix themes
      const radixThemes = document.querySelectorAll('.radix-themes');
      radixThemes.forEach(el => {
        (el as HTMLElement).setAttribute('data-radix-theme-mode', currentTheme);
        
        // Also set data-has-background attribute if missing
        if (!(el as HTMLElement).hasAttribute('data-has-background')) {
          (el as HTMLElement).setAttribute('data-has-background', 'true');
        }
      });
    };
    
    updateRadixThemes();
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateRadixThemes);
    
    return () => {
      mediaQuery.removeEventListener('change', updateRadixThemes);
    };
  }, [theme, mounted]);
  
  return (
    <>
      <Theme
        appearance={appearance}
        accentColor="blue"
        grayColor="slate"
        radius="medium"
        scaling="95%"
        panelBackground="solid"
      >
        {children}
      </Theme>
      
      {/* Only apply DOM manipulation on client-side */}
      <ClientOnly>
        <div style={{ display: 'none' }} id="theme-mode-handler" />
      </ClientOnly>
    </>
  );
}
