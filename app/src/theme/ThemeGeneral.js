import { createTheme } from '@mui/material/styles';

export const ThemeGeneral = createTheme({
  palette: {
    // Greens
    primary: {
      light: '#A1FFB6',
      main: '#17CB3F',
      dark: '#0B8742',
      contrastText: '#000000',
    },
    // Reds
    secondary: {
      light: '#FF7171',
      main: '#F52525',
      dark: '#E11D23',
      contrastText: '#000000',
    },
    // Yellows
    third: {
      light: '#FCFF7F',
      main: '#FAFD61',
      dark: '#FFE600',
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
      'Montserrat',
    ].join(','),
  },
});