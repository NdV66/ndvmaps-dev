import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useAppContext } from 'elements/AppContext';
import { SectionContainer } from 'elements/SectionContainer';

export const AboutMeElement = () => {
  const { translations } = useAppContext();

  return (
    <SectionContainer>
      <Grid container alignContent="center" justifyContent="center">
        <Grid xs={12} md={8}>
          <Typography variant="h3" sx={{ marginBottom: '48px' }}>
            {translations.aboutMe.title}
          </Typography>
          <Typography align="justify">{translations.aboutMe.description}</Typography>
          <Typography sx={{ marginTop: '32px' }} variant="h6" align="justify">
            {translations.aboutMe.summary}
          </Typography>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
