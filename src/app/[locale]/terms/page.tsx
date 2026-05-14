import { Box, Container, Divider, Stack, Text, Title } from '@mantine/core';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content/site-content';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/site';
import classes from './terms.module.css';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getContent(locale).legal;

  return {
    title: copy.termsTitle,
    description: copy.termsText,
    alternates: { canonical: `/${locale}/terms` }
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getContent(locale).legal;

  return (
    <Container size="md" className={classes.page}>
      <Stack gap="xl">
        <Title order={1}>{copy.termsTitle}</Title>
        <Box className={classes.panel}>
          <Stack gap="xl">
            <Stack gap="xs">
              <Text c="dimmed" fw={700}>
                {copy.lastUpdatedLabel}: {copy.lastUpdated}
              </Text>
              <Text size="lg">{copy.termsIntro}</Text>
            </Stack>

            <Divider />

            {copy.termsSections.map((section) => (
              <Stack key={section.title} gap="sm" className={classes.section}>
                <Title order={2}>{section.title}</Title>
                {section.body.map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </Stack>
            ))}
          </Stack>

          <Text c="dimmed" mt="md">
            {copy.contactText.replace('support@proctor.uz', siteConfig.supportEmail)}
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
