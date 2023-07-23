import { Box, styled } from '@mui/material';

export const FlexCenteredBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
