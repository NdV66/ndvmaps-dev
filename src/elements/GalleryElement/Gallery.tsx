import { ImageList, Typography, ImageListItem, Box, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useAppContext } from 'elements/AppContext';
import { SectionContainer } from 'elements/SectionContainer';
import { GALLERY_ITEMS } from './itemsData';
import { DownloadButton, FlexCenteredBox, FollowMeButtons } from 'elements/common';

export const buttonProps = {
  component: 'a',
  rel: 'noopener',
  target: '_blank',
};

const ROW_HEIGHT_PX = 400;
const MAX_COLUMNS = 3;
const MIN_COLUMNS = 1;

export const Gallery = () => {
  const { translations } = useAppContext();
  const isLessThanMd = useMediaQuery(`(max-width:${(ROW_HEIGHT_PX * MAX_COLUMNS) / 2}px)`);

  const cols = useMemo(() => (isLessThanMd ? MIN_COLUMNS : MAX_COLUMNS), [isLessThanMd]);

  return (
    <SectionContainer>
      <Typography variant="h3" sx={{ marginBottom: '48px' }} align="center">
        {translations.gallery.title}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList
          sx={{ width: cols * ROW_HEIGHT_PX, height: 'auto' }}
          cols={cols}
          rowHeight={ROW_HEIGHT_PX}
        >
          {GALLERY_ITEMS.map((item) => (
            <ImageListItem key={item}>
              <img src={item} alt="One of the maps" loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <FlexCenteredBox>
        <DownloadButton />
        <FollowMeButtons />
      </FlexCenteredBox>
    </SectionContainer>
  );
};
