import { createTheme } from '@mui/material/styles';

export const ThemeTitres = createTheme({
  palette: {
    // Greens
    primary: {
      main: '#0B8742',
      contrastText: '#000000',
    },
    // Reds
    secondary: {
      main: '#E11D23',
      contrastText: '#000000',
    },
    // Yellows
    third: {
      main: '#F7EB4B',
      contrastText: '#000000',
      },
      // Greys
    fourth: {
      light: '#FAFAFA',
      main: '#F2F2F2',
      dark: '#2B2B2B',
      },
  },
  typography: {
    fontFamily: [
      'Bree Serif',
    ].join(','),
  },
});