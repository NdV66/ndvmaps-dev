import { AppBar, Typography, Box, Toolbar } from '@mui/material';
import { useAppContext } from './AppContext';

export const AppBarElement = () => {
  const { translations } = useAppContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {translations.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
