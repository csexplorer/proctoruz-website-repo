import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content/site-content';
import type { Locale } from '@/i18n/routing';
import { getLatestRelease } from '@/lib/releases';
import { siteConfig } from '@/lib/site';
import { DownloadClient } from './DownloadClient';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const page = getContent(locale).download;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${locale}/download`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.domain}/${locale}/download`
    }
  };
}

export default async function DownloadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <DownloadClient
      locale={locale}
      copy={getContent(locale).download}
      release={await getLatestRelease()}
    />
  );
}
