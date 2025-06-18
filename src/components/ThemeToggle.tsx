'use client';

import { Button, Flex, Box, DropdownMenu } from '@radix-ui/themes';
import { SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          variant="ghost"
          size="2"
          style={{
            borderRadius: '50%',
            width: '100%',
            height: '100%',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--blue-9)',
            transition: 'transform 0.2s ease, color 0.2s ease',
            border: '1px solid rgba(0, 112, 243, 0.2)'
          }}
        >
          <Flex align="center" justify="center">
            {theme === 'light' && <SunIcon width="20" height="20" style={{ color: 'var(--amber-9)' }} />}
            {theme === 'dark' && <MoonIcon width="20" height="20" style={{ color: 'var(--blue-9)' }} />}
            {theme === 'system' && <DesktopIcon width="20" height="20" style={{ color: 'var(--slate-11)' }} />}
          </Flex>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" style={{ 
        background: 'var(--slate-2)',
        border: '1px solid var(--slate-4)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        color: 'var(--slate-12)'
      }}>
        <DropdownMenu.Item 
          onClick={() => setTheme('light')} 
          style={{ 
            padding: '8px 16px',
            cursor: 'pointer',
            borderRadius: '4px',
            margin: '2px',
            color: 'var(--slate-12)'
          }}
          className="theme-dropdown-item"
        >
          <Flex gap="2" align="center">
            <SunIcon style={{ color: 'var(--amber-9)' }} />
            <Box>Light</Box>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item 
          onClick={() => setTheme('dark')} 
          style={{ 
            padding: '8px 16px',
            cursor: 'pointer',
            borderRadius: '4px',
            margin: '2px',
            color: 'var(--slate-12)'
          }}
          className="theme-dropdown-item"
        >
          <Flex gap="2" align="center">
            <MoonIcon style={{ color: 'var(--blue-9)' }} />
            <Box>Dark</Box>
          </Flex>
        </DropdownMenu.Item>
        <DropdownMenu.Item 
          onClick={() => setTheme('system')} 
          style={{ 
            padding: '8px 16px',
            cursor: 'pointer',
            borderRadius: '4px',
            margin: '2px',
            color: 'var(--slate-12)'
          }}
          className="theme-dropdown-item"
        >
          <Flex gap="2" align="center">
            <DesktopIcon style={{ color: 'var(--green-9)' }} />
            <Box>System</Box>
          </Flex>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
