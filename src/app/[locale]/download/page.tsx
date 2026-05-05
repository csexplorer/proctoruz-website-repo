import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content/site-content';
import type { Locale } from '@/i18n/routing';
import { getLatestRelease } from '@/lib/releases';
import { siteConfig } from '@/lib/site';
import { DownloadClient } from './DownloadClient';

type Props = {
  params: Promise<{ locale: Locale }>;
  searchParams?: Promise<{ returnTo?: string | string[] }>;
};

function getSafeReturnTo(value: string | string[] | undefined) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  if (!rawValue) return null;

  try {
    const url = new URL(rawValue);
    const allowedOrigins = new Set([
      new URL(siteConfig.demoApiUrl).origin
    ]);

    if (allowedOrigins.has(url.origin)) {
      return url.toString();
    }
  } catch {
    return null;
  }

  return null;
}

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

export default async function DownloadPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  setRequestLocale(locale);

  return (
    <DownloadClient
      locale={locale}
      copy={getContent(locale).download}
      release={await getLatestRelease()}
      returnToUrl={getSafeReturnTo(resolvedSearchParams?.returnTo)}
    />
  );
}
