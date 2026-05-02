import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import { getContent } from '@/content/site-content';
import { routing, type Locale } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const typedLocale = locale as Locale;

  return (
    <NextIntlClientProvider>
      <SiteShell locale={typedLocale} content={getContent(typedLocale)}>
        {children}
      </SiteShell>
    </NextIntlClientProvider>
  );
}
