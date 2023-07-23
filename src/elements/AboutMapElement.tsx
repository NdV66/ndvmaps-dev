import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useAppContext } from 'elements/AppContext';
import { SectionContainer } from 'elements/SectionContainer';

export const AboutMapElement = () => {
  const { translations } = useAppContext();

  return (
    <SectionContainer>
      <Grid container alignContent="center" justifyContent="center">
        <Grid xs={12} md={8}>
          <Typography variant="h3" sx={{ marginBottom: '48px' }}>
            {translations.aboutMaps.title}
          </Typography>

          <Typography align="justify">{translations.aboutMaps.description}</Typography>
          <Typography sx={{ marginTop: '32px' }} variant="h6" align="justify">
            {translations.aboutMaps.summary}
          </Typography>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};
