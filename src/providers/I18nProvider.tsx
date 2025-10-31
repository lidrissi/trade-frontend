import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface I18nProviderProps {
  children: React.ReactNode;
  locale: string;
}

export const I18nProvider = async ({ children, locale }: I18nProviderProps) => {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
