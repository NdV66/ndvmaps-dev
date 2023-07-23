import { Typography, Box } from '@mui/material';
import { useAppContext } from 'elements/AppContext';
import { DownloadButton } from 'elements/common/DownloadButton';

export const LeftPanel = () => {
  const { translations } = useAppContext();

  return (
    <Box
      sx={{
        padding: '104px 0',
        '@media (max-width: 900px)': {
          padding: '48px 0',
        },
      }}
    >
      <Typography variant="h2" component="h1">
        {translations.title}
      </Typography>

      <DownloadButton />
    </Box>
  );
};
