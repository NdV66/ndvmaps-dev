import { Box } from '@mui/material';
import { JumbotronElement } from './Jumbotron';
import { useAppContext } from './AppContext';
import { AboutMapElement } from './AboutMapElement';

import { StyledImage } from './common';
import { Gallery } from './GalleryElement';

import bigBg from 'assets/bigBg1.jpeg';
import bigBg2 from 'assets/bigBg2.jpg';
import { AboutMeElement } from './AboutMeElement';

const space = {
  padding: '0 32px',
};

export const MainElement = () => {
  const { theme } = useAppContext();

  const backgroundGradient = {
    background: `linear-gradient(90deg,  ${theme.light} 20%, ${theme.background} 50%, ${theme.background} 100%)`,
  };

  return (
    <>
      <Box sx={{ ...backgroundGradient, ...space }}>
        <JumbotronElement />
      </Box>

      <StyledImage image={bigBg2} sx={{ height: '280px' }} />

      <Box
        sx={{
          background: theme.background,
          ...space,
        }}
      >
        <AboutMapElement />
      </Box>

      <StyledImage image={bigBg} sx={{ height: '280px' }} />

      <Box sx={{ ...backgroundGradient, ...space }}>
        <Gallery />
      </Box>

      <Box sx={{ background: theme.background, ...space }}>
        <AboutMeElement />
      </Box>
    </>
  );
};
