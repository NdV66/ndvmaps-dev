import { useMediaQuery } from '@mui/material';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { SectionContainer } from '../SectionContainer';
import { RightPanelSmall } from './RightPanelSmall';
import { LeftPanel } from './LeftPanel';
import { RightPanelBig } from './RightPanelBig';

export const JumbotronElement = () => {
  const isLessThanMd = useMediaQuery('(max-width:900px)');
  const isLessThanSm = useMediaQuery('(max-width:600px)');

  return (
    <SectionContainer>
      <Grid container alignContent="center" justifyContent="center" spacing={4}>
        <Grid md={5} xs={12}>
          <LeftPanel />
        </Grid>

        {!isLessThanSm && (
          <Grid md={7} xs={12}>
            {isLessThanMd ? <RightPanelSmall /> : <RightPanelBig />}
          </Grid>
        )}
      </Grid>
    </SectionContainer>
  );
};
