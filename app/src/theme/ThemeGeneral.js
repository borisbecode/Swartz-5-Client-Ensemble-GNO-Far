import { createTheme } from '@mui/material/styles';

export const ThemeGeneral = createTheme({
  palette: {
    // Greens
    primary: {
      light: '#A1FFB6',
      main: '#70DD88',
      dark: '#1AC064',
      contrastText: '#000000',
    },
    // Reds
    secondary: {
      light: '#FF7171',
      main: '#FE5A5A',
      dark: '#F52525',
      contrastText: '#000000',
    },
    // Yellows
    third: {
      light: '#FCFF7F',
      main: '#FAFD61',
      dark: '#FFE600',
      contrastText: '#000000',
      },
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});