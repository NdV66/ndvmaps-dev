import { CssBaseline, ThemeProvider, createTheme, PaletteOptions, Box } from '@mui/material';

import { TAppTheme } from 'types';
import { MainElement } from './MainElement';
import { useAppContext } from './AppContext';
import { AppBarElement } from './AppBarElement';
import { AppFooter } from './AppFooter';

export const useMainPage = (theme: TAppTheme) => {
  const palette: PaletteOptions = {
    mode: theme.name,
    primary: {
      main: theme.primary,
      contrastText: theme.background,
    },
    secondary: {
      main: theme.secondary,
      contrastText: theme.light,
    },
    background: {
      default: theme.background,
    },
  };

  const muiTheme = createTheme({
    typography: {
      fontSize: theme.fontSize,
    },
    palette,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            background: theme.primary,
            color: theme.background,
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            background: theme.background,
            color: theme.primary,
            padding: '0 32px',
            boxShadow: 'none',
            textTransform: 'uppercase',
          },
        },
      },
    },
  });

  return { muiTheme };
};

export const HomePage = () => {
  const { theme } = useAppContext();
  const { muiTheme } = useMainPage(theme);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <header role="heading" aria-level={0}>
        <AppBarElement />
      </header>

      <main role="main">
        <MainElement />
      </main>

      <footer role="contentinfo">
        <Box sx={{ background: theme.background, padding: '0 32px' }}>
          <AppFooter />
        </Box>
      </footer>
    </ThemeProvider>
  );
};
