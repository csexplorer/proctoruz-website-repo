'use client';

import {
  Accordion,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import {
  IconArrowRight,
  IconBuildingBank,
  IconCertificate,
  IconDeviceLaptop,
  IconDownload,
  IconEyeCheck,
  IconFlag,
  IconId,
  IconReportAnalytics,
  IconSchool,
  IconShieldLock,
  IconUsersGroup
} from '@tabler/icons-react';
import { HeroVisual } from '@/components/HeroVisual';
import type { SiteContent } from '@/content/site-content';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/lib/site';
import classes from './page.module.css';

type Props = {
  locale: Locale;
  copy: SiteContent;
};

const problemIcons = [IconFlag, IconId, IconUsersGroup, IconBuildingBank];
const featureIcons = [
  IconShieldLock,
  IconEyeCheck,
  IconId,
  IconFlag,
  IconReportAnalytics,
  IconDeviceLaptop
];
const audienceIcons = [IconSchool, IconUsersGroup, IconCertificate, IconBuildingBank];

export function HomeClient({ locale, copy }: Props) {
  const page = copy.home;

  return (
    <>
      <section className={classes.hero}>
        <Container size="xl">
          <Grid gap={{ base: 32, md: 56 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl" className={classes.heroCopy}>
                <Stack gap="md">
                  <Badge size="lg" variant="light" color="teal">
                    {page.hero.eyebrow}
                  </Badge>
                  <Title order={1} className={classes.heroTitle}>
                    {page.hero.title}
                  </Title>
                  <Text size="lg" c="dimmed" className={classes.heroLead}>
                    {page.hero.lead}
                  </Text>
                </Stack>

                <Group gap="md">
                  <Button
                    component={Link}
                    href="/download"
                    locale={locale}
                    size="lg"
                    leftSection={<IconDownload size={19} />}
                  >
                    {page.hero.primaryCta}
                  </Button>
                  <Button
                    component="a"
                    href={`mailto:${siteConfig.demoEmail}`}
                    size="lg"
                    variant="outline"
                    rightSection={<IconArrowRight size={19} />}
                  >
                    {page.hero.secondaryCta}
                  </Button>
                </Group>

                <Group gap="sm" className={classes.trustGroup}>
                  {page.hero.trust.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <HeroVisual />
            </Grid.Col>
          </Grid>
        </Container>
      </section>

      <Section id="problems" title={page.problemsTitle} lead={page.problemsLead}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
          {page.problems.map((item, index) => {
            const Icon = problemIcons[index];
            return (
              <InfoPanel key={item.title} icon={<Icon size={22} />} title={item.title}>
                {item.text}
              </InfoPanel>
            );
          })}
        </SimpleGrid>
      </Section>

      <Section id="features" title={page.featuresTitle} lead={page.featuresLead} tone="white">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {page.features.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <InfoPanel key={item.title} icon={<Icon size={22} />} title={item.title}>
                {item.text}
              </InfoPanel>
            );
          })}
        </SimpleGrid>
      </Section>

      <Section id="audiences" title={page.audiencesTitle}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
          {page.audiences.map((item, index) => {
            const Icon = audienceIcons[index];
            return (
              <InfoPanel key={item.title} icon={<Icon size={22} />} title={item.title}>
                {item.text}
              </InfoPanel>
            );
          })}
        </SimpleGrid>
      </Section>

      <section className={classes.faqSection}>
        <Container size="md">
          <Title order={2} className={classes.sectionTitle}>
            {page.faqTitle}
          </Title>
          <Accordion variant="separated" radius="md" className={classes.faq}>
            {page.faqs.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className={classes.cta}>
        <Container size="lg">
          <Group justify="space-between" gap="xl" className={classes.ctaInner}>
            <Stack gap="xs" maw={650}>
              <Title order={2}>{page.ctaTitle}</Title>
              <Text c="dimmed" size="lg">
                {page.ctaText}
              </Text>
            </Stack>
            <Button
              component={Link}
              href="/download"
              locale={locale}
              size="lg"
              leftSection={<IconDownload size={19} />}
            >
              {copy.nav.download}
            </Button>
          </Group>
        </Container>
      </section>
    </>
  );
}

function Section({
  id,
  title,
  lead,
  children,
  tone
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  tone?: 'white';
}) {
  return (
    <section id={id} className={tone === 'white' ? classes.sectionWhite : classes.section}>
      <Container size="xl">
        <Stack gap="xl">
          <Stack gap="xs" maw={760}>
            <Title order={2} className={classes.sectionTitle}>
              {title}
            </Title>
            {lead ? (
              <Text size="lg" c="dimmed">
                {lead}
              </Text>
            ) : null}
          </Stack>
          {children}
        </Stack>
      </Container>
    </section>
  );
}

function InfoPanel({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box className={classes.panel}>
      <ThemeIcon size={44} radius="md" variant="light" color="teal">
        {icon}
      </ThemeIcon>
      <Title order={3}>{title}</Title>
      <Text c="dimmed">{children}</Text>
    </Box>
  );
}
