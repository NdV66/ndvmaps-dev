import { useAppContext } from 'elements/AppContext';
import { FollowMeButton } from './FollowMeButton';

export const FollowMeButtons = () => {
  const { translations } = useAppContext();

  return (
    <>
      <FollowMeButton href={translations.instagramLink}>
        {translations.followMe}&nbsp;<strong>{translations.Instagram}</strong>
      </FollowMeButton>
      <FollowMeButton href={translations.deviantArtLink}>
        {translations.followMe}&nbsp;<strong>{translations.DeviantArt}</strong>
      </FollowMeButton>
    </>
  );
};
