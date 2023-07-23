import { Button, Typography } from '@mui/material';

import { useAppContext } from 'elements/AppContext';
import { hrefButtonProps } from './hrefButtonProps';

export const DownloadButton = () => {
  const { translations } = useAppContext();

  return (
    <Button
      {...hrefButtonProps}
      variant="contained"
      sx={{ marginTop: '48px' }}
      href={translations.driveThuRpgLink}
      size="large"
    >
      <Typography sx={{ padding: '8px 16px' }} component="span" variant="subtitle2">
        {translations.download}
      </Typography>
    </Button>
  );
};
