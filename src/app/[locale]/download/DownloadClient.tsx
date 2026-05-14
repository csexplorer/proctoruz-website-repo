'use client';

import {
  Alert,
  Badge,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import {
  IconAlertCircle,
  IconBrandApple,
  IconBrandWindows,
  IconBuildingBank,
  IconDeviceDesktop,
  IconDownload,
  IconFileTypeZip,
  IconPackage,
  IconTerminal2
} from '@tabler/icons-react';
import type { SiteContent } from '@/content/site-content';
import type { Locale } from '@/i18n/routing';
import { getPlatformLabel } from '@/lib/labels';
import { type DownloadAsset, formatBytes, type ReleaseInfo } from '@/lib/releases';
import classes from './download.module.css';

type Props = {
  locale: Locale;
  copy: SiteContent['download'];
  release: ReleaseInfo;
};

const orderedKinds = ['windows', 'mac-arm', 'mac-intel', 'linux', 'other'] as const;

export function DownloadClient({ locale, copy, release }: Props) {
  const sortedAssets = [...release.assets].sort(
    (a, b) => orderedKinds.indexOf(a.kind) - orderedKinds.indexOf(b.kind)
  );
  const primaryAssets = sortedAssets.filter((asset) => asset.kind !== 'other');
  const otherAssets = sortedAssets.filter((asset) => asset.kind === 'other');

  return (
    <>
      <section className={classes.hero}>
        <Container size="xl">
          <div className={classes.heroGrid}>
            <Stack gap="xl" className={classes.heroCopy}>
              <Stack gap="md">
                <Badge size="lg" variant="light" color="teal">
                  {copy.latest}
                </Badge>
                <Title order={1} className={classes.title}>
                  {copy.title}
                </Title>
                <Text size="lg" c="dimmed" className={classes.lead}>
                  {copy.lead}
                </Text>
              </Stack>

              <Group gap="md">
                <Meta label={copy.version} value={release.version} />
                <Meta
                  label={copy.released}
                  value={
                    release.publishedAt
                      ? new Intl.DateTimeFormat(locale).format(new Date(release.publishedAt))
                      : '-'
                  }
                />
              </Group>

              {release.source === 'fallback' ? (
                <Alert color="yellow" icon={<IconAlertCircle size={18} />}>
                  {copy.fallbackNotice}
                </Alert>
              ) : null}
            </Stack>

            <Box className={classes.appPanel}>
              <ThemeIcon size={66} radius="md" color="teal" variant="light">
                <IconDeviceDesktop size={36} />
              </ThemeIcon>
              <Stack gap={4}>
                <Title order={2}>ProctorUZ</Title>
                <Text c="dimmed">Desktop proctoring application</Text>
              </Stack>
              <Box className={classes.panelGrid}>
                <span>Browser lock</span>
                <span>Identity checks</span>
                <span>Monitoring</span>
                <span>Reports</span>
              </Box>
            </Box>
          </div>
        </Container>
      </section>

      <section className={classes.downloads}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
            {primaryAssets.map((asset) => (
              <DownloadCard key={asset.name} asset={asset} copy={copy} />
            ))}
          </SimpleGrid>

          {otherAssets.length > 0 ? (
            <Stack gap="md" mt="xl">
              <Title order={2}>{copy.otherDownloads}</Title>
              <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
                {otherAssets.map((asset) => (
                  <DownloadCard key={asset.name} asset={asset} copy={copy} />
                ))}
              </SimpleGrid>
            </Stack>
          ) : null}
        </Container>
      </section>

      <section className={classes.pricing}>
        <Container size="xl">
          <Box className={classes.pricingPanel}>
            <Stack gap="lg">
              <ThemeIcon size={54} radius="md" color="teal" variant="light">
                <IconBuildingBank size={28} />
              </ThemeIcon>
              <Stack gap="xs">
                <Title order={2}>{copy.pricingTitle}</Title>
                <Text c="dimmed" size="lg" className={classes.pricingText}>
                  {copy.pricingText}
                </Text>
              </Stack>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
                {copy.pricingPlans.map((plan) => (
                  <Box key={plan.title} className={classes.pricingCard}>
                    <Title order={3}>{plan.title}</Title>
                    <Text c="dimmed">{plan.text}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Box>
        </Container>
      </section>

      <section className={classes.guide}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <GuideBlock title={copy.requirementsTitle} items={copy.requirements} />
            <GuideBlock title={copy.stepsTitle} items={copy.steps} ordered />
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <Box className={classes.meta}>
      <Text size="xs" tt="uppercase" fw={800} c="dimmed">
        {label}
      </Text>
      <Text fw={800}>{value}</Text>
    </Box>
  );
}

const downloadIcons = {
  windows: IconBrandWindows,
  'mac-arm': IconBrandApple,
  'mac-intel': IconBrandApple,
  linux: IconTerminal2,
  other: IconPackage
} satisfies Record<DownloadAsset['kind'], typeof IconPackage>;

function DownloadCard({ asset, copy }: { asset: DownloadAsset; copy: SiteContent['download'] }) {
  const Icon = downloadIcons[asset.kind] ?? IconFileTypeZip;

  return (
    <Box className={classes.card}>
      <Group justify="space-between" align="flex-start" gap="md">
        <ThemeIcon size={48} radius="md" color="teal" variant="light">
          <Icon size={25} />
        </ThemeIcon>
        <Badge variant="outline">{getPlatformLabel(asset.kind)}</Badge>
      </Group>

      <Stack gap={6}>
        <Title order={3}>{asset.name}</Title>
        <Text c="dimmed">
          {copy.size}: {formatBytes(asset.size)}
        </Text>
        <Text c="dimmed" className={classes.checksum}>
          {copy.checksum}:{' '}
          {asset.checksum ? (
            <a href={asset.checksum}>{asset.checksum.split('/').at(-1)}</a>
          ) : (
            copy.noChecksum
          )}
        </Text>
      </Stack>

      <Button
        component="a"
        href={asset.url}
        leftSection={<IconDownload size={18} />}
        fullWidth
      >
        {copy.primaryAction}
      </Button>
    </Box>
  );
}

function GuideBlock({
  title,
  items,
  ordered
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <Box className={classes.guideBlock}>
      <Title order={2}>{title}</Title>
      <ListTag>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    </Box>
  );
}
