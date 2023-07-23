import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { SectionContainer } from './SectionContainer';

import bg from 'assets/bg3.png';
import { useAppContext } from './AppContext';
import { Box, Link, Typography } from '@mui/material';
import { FollowMeButtons, StyledImage, hrefButtonProps } from './common';

export const AppFooter = () => {
  const { translations } = useAppContext();

  return (
    <SectionContainer>
      <Grid container spacing={4}>
        <Grid md={5} sm={6} xs={12}>
          <Typography variant="h3" sx={{ marginBottom: '48px' }}>
            {translations.footer.title}
          </Typography>

          <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'column' }}>
            <FollowMeButtons />
          </Box>

          <Link
            sx={{ marginTop: '48px', display: 'inline-block' }}
            href={translations.footer.creatorLink}
            variant="body2"
            underline="hover"
            {...hrefButtonProps}
          >
            {translations.footer.createdBy}
          </Link>
        </Grid>

        <Grid md={7} sm={6} xs={0}>
          <StyledImage image={bg} />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
