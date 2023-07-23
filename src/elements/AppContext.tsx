import { createContext, useContext, PropsWithChildren } from 'react';
import { TAppSettings, TAppTheme, TTranslations } from 'types';

export type IAppContext = {
  theme: TAppTheme;
  translations: TTranslations;
};

export const AppContext = createContext<IAppContext>({} as IAppContext);

type Props = Pick<TAppSettings, 'defaultTheme' | 'defaultTranslations'>;

export const AppContextWrapper = ({
  children,
  defaultTheme,
  defaultTranslations,
}: PropsWithChildren<Props>) => {
  const value: IAppContext = {
    theme: defaultTheme,
    translations: defaultTranslations,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
