import { ReduxProvider } from './ReduxProvider';
import { I18nProvider } from './I18nProvider';
import { AbilityProvider } from './AbilityProvider';
import { SessionProvider } from 'next-auth/react';
import Aside from '@/components/aside';

export function AppProviders({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <SessionProvider>
      <ReduxProvider>
        <I18nProvider locale={locale}>
          <AbilityProvider>
            <Aside.Provider>{children}</Aside.Provider>
          </AbilityProvider>
        </I18nProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
