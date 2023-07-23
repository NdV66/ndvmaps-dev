import { StyledImage, FollowMeButtons, FlexCenteredBox } from 'elements/common';

import bg1 from 'assets/bg1.png';

export const RightPanelBig = () => (
  <StyledImage sx={{ position: 'relative' }} image={bg1}>
    <FlexCenteredBox
      sx={{
        position: 'absolute',
        bottom: '32px',
        left: '-32px',
      }}
    >
      <FollowMeButtons />
    </FlexCenteredBox>
  </StyledImage>
);
