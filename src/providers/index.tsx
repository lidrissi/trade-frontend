import { ReduxProvider } from './ReduxProvider';
import { I18nProvider } from './I18nProvider';
import { AbilityProvider } from './AbilityProvider';
import { SessionProvider } from 'next-auth/react';

export function AppProviders({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <SessionProvider>
      <ReduxProvider>
        <I18nProvider locale={locale}>
          {/* <AbilityProvider> */}
          {children}
          {/* </AbilityProvider> */}
        </I18nProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
