import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';

export const SectionContainer = ({ children }: PropsWithChildren) => (
  <Container
    maxWidth="lg"
    sx={{
      padding: '96px 0',
      '@media (max-width: 600px)': {
        padding: '48px 0',
      },
    }}
  >
    {children}
  </Container>
);
