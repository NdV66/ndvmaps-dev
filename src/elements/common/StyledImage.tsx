import { SxProps, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const StyledImageRaw = styled('div')(() => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
}));

type Props = {
  image: string;
  sx?: SxProps;
};

export const StyledImage = ({ image, sx = {}, children }: PropsWithChildren<Props>) => (
  <StyledImageRaw sx={{ backgroundImage: `url(${image})`, ...sx }}>{children}</StyledImageRaw>
);
