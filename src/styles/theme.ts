import { slate, blue, slateDark, blueDark } from '@radix-ui/colors';

export const lightTheme = {
  colors: {
    ...slate,
    ...blue,
    background: 'white',
    text: slate.slate12,
    primary: blue.blue9,
    secondary: slate.slate11,
    muted: slate.slate8,
    accent: blue.blue7,
    surface: slate.slate2,
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
};

export const darkTheme = {
  colors: {
    ...slateDark,
    ...blueDark,
    background: slateDark.slate1,
    text: slateDark.slate12,
    primary: blueDark.blue9,
    secondary: slateDark.slate11,
    muted: slateDark.slate8,
    accent: blueDark.blue7,
    surface: slateDark.slate2,
  },
  space: lightTheme.space,
  fontSizes: lightTheme.fontSizes,
  radii: lightTheme.radii,
};
