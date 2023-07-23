import { StyledImage, FollowMeButtons, FlexCenteredBox } from 'elements/common';

import bg1 from 'assets/bg1.png';

export const RightPanelSmall = () => (
  <StyledImage
    sx={{
      width: '100%',
      height: '300px',
      justifyContent: 'center',
      alignContent: 'center',
      display: 'flex',
    }}
    image={bg1}
  >
    <FlexCenteredBox>
      <FollowMeButtons />
    </FlexCenteredBox>
  </StyledImage>
);
