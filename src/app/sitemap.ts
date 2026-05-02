import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/lib/site';

const routes = ['', '/download', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.domain}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.75,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [item, `${siteConfig.domain}/${item}${route}`])
        )
      }
    }))
  );
}
