import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { LANG_EN, DARK_THEME } from 'data';

import { HomePage, AppContextWrapper } from 'elements';
import { TAppSettings } from 'types';

const defaultAppConfig: TAppSettings = {
  defaultTheme: DARK_THEME,
  defaultTranslations: LANG_EN,
};

export const App = () => (
  <AppContextWrapper
    defaultTheme={defaultAppConfig.defaultTheme}
    defaultTranslations={defaultAppConfig.defaultTranslations}
  >
    <HomePage />
  </AppContextWrapper>
);

export default App;
