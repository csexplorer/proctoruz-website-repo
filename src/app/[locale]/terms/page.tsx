import { Box, Container, Stack, Text, Title } from '@mantine/core';
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
          <Text size="lg">{copy.termsText}</Text>
          <Text c="dimmed" mt="md">
            {copy.contactText.replace('support@proctor.uz', siteConfig.supportEmail)}
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
