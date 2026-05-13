'use client';

import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text
} from '@mantine/core';
import { IconArrowRight, IconDownload, IconShieldCheck } from '@tabler/icons-react';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { SiteContent } from '@/content/site-content';
import { siteConfig } from '@/lib/site';
import classes from './SiteShell.module.css';

type Props = {
  locale: Locale;
  content: SiteContent;
  children: React.ReactNode;
};

export function SiteShell({ locale, content, children }: Props) {
  return (
    <Box className={classes.page}>
      <header className={classes.header}>
        <Container size="xl" className={classes.headerInner}>
          <Anchor component={Link} href="/" locale={locale} className={classes.logo}>
            <span className={classes.logoMark}>
              <IconShieldCheck size={20} stroke={2.2} />
            </span>
            <span>Proctor.uz</span>
          </Anchor>

          <Group gap="lg" visibleFrom="md" className={classes.nav}>
            <Anchor href="#problems">{content.nav.problems}</Anchor>
            <Anchor href="#features">{content.nav.features}</Anchor>
            <Anchor href="#audiences">{content.nav.audiences}</Anchor>
            <Anchor component={Link} href="/download" locale={locale}>
              {content.nav.download}
            </Anchor>
            <Anchor component={Link} href="/demo" locale={locale}>
              {content.nav.demo}
            </Anchor>
          </Group>

          <Group gap="xs" className={classes.headerActions}>
            <Group gap={4} visibleFrom="sm" className={classes.localeGroup}>
              {(['uz', 'ru', 'en'] as const).map((item) => (
                <Anchor
                  key={item}
                  component={Link}
                  href="/"
                  locale={item}
                  className={item === locale ? classes.localeActive : classes.localeLink}
                >
                  {item.toUpperCase()}
                </Anchor>
              ))}
            </Group>
            <Button
              component={Link}
              href="/download"
              locale={locale}
              leftSection={<IconDownload size={16} />}
              size="sm"
            >
              {content.nav.download}
            </Button>
          </Group>
        </Container>
      </header>

      <main>{children}</main>

      <footer className={classes.footer}>
        <Container size="xl">
          <Group justify="space-between" align="flex-start" gap="xl" className={classes.footerGrid}>
            <Stack gap="xs" maw={460}>
              <Group gap="xs">
                <span className={classes.logoMark}>
                  <IconShieldCheck size={18} stroke={2.2} />
                </span>
                <Text fw={700}>Proctor.uz</Text>
              </Group>
              <Text c="dimmed" size="sm">
                ProctorUZ delivery for remote and hybrid assessment workflows.
              </Text>
            </Stack>

            <Group gap="lg" className={classes.footerLinks}>
              <Anchor component={Link} href="/privacy" locale={locale}>
                {content.nav.privacy}
              </Anchor>
              <Anchor component={Link} href="/terms" locale={locale}>
                {content.nav.terms}
              </Anchor>
              <Anchor href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Anchor>
              <Button
                component={Link}
                href="/demo"
                locale={locale}
                variant="subtle"
                rightSection={<IconArrowRight size={16} />}
              >
                {content.nav.demo}
              </Button>
            </Group>
          </Group>
        </Container>
      </footer>
    </Box>
  );
}
