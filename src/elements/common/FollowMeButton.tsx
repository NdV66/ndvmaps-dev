import { Button, ButtonProps, useTheme } from '@mui/material';
import { hrefButtonProps } from 'elements/common';

export const FollowMeButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      {...props}
      variant="contained"
      sx={{ marginTop: '16px', maxWidth: '240px', color: theme.palette.primary.main }}
      color="secondary"
      size="small"
      {...hrefButtonProps}
    />
  );
};
