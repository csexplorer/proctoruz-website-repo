'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title
} from '@mantine/core';
import { IconArrowRight, IconDownload, IconExternalLink, IconRefresh, IconSchool, IconShieldCheck } from '@tabler/icons-react';
import classes from './demo.module.css';

const STORAGE_KEY = 'proctoruz-demo:v1';
const STATUS_POLL_MS = 5000;

type Copy = {
  title: string;
  lead: string;
  name: string;
  university: string;
  email: string;
  submit: string;
  loading: string;
  success: string;
  successLead: string;
  downloadFirst: string;
  openDemoInstalled: string;
  viewReport: string;
  reportWaiting: string;
  reportReady: string;
  startNew: string;
  expired: string;
  error: string;
  steps: string[];
};

type DemoLeadResponse = {
  leadId: string;
  studentDemoUrl: string;
  downloadUrl: string;
  expiresAt: number;
};

type DemoLeadStatusResponse = {
  leadId: string;
  status: string;
  expiresAt: number;
  reportReady: boolean;
  reportMagicUrl: string | null;
};

type DemoState = DemoLeadResponse & {
  status?: string;
  reportReady?: boolean;
  reportMagicUrl?: string | null;
};

const isExpired = (result: DemoState) => result.expiresAt * 1000 <= Date.now();

const readStoredDemo = (): DemoState | null => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null') as DemoState | null;
    if (!parsed?.leadId || !parsed.studentDemoUrl || !parsed.downloadUrl || !parsed.expiresAt || isExpired(parsed)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

const writeStoredDemo = (result: DemoState) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
};

export function DemoClient({ copy, demoApiUrl }: { copy: Copy; demoApiUrl: string }) {
  const normalizedDemoApiUrl = demoApiUrl.replace(/\/$/, '');
  const [values, setValues] = useState({ name: '', university: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<DemoState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const activeResult = result && !isExpired(result) ? result : null;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setResult(readStoredDemo());
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!result) return;
    if (isExpired(result)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    writeStoredDemo(result);
  }, [result]);

  useEffect(() => {
    if (!activeResult || activeResult.reportReady) return;

    const pollStatus = async () => {
      if (document.visibilityState !== 'visible') return;
      const response = await fetch(`${normalizedDemoApiUrl}/api/demo/leads/${activeResult.leadId}/status`);
      if (!response.ok) return;

      const status = (await response.json()) as DemoLeadStatusResponse;
      setResult((current) => {
        if (!current || current.leadId !== status.leadId) return current;
        return {
          ...current,
          status: status.status,
          expiresAt: status.expiresAt,
          reportReady: status.reportReady,
          reportMagicUrl: status.reportMagicUrl
        };
      });
    };

    void pollStatus();
    const intervalId = window.setInterval(() => {
      void pollStatus();
    }, STATUS_POLL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeResult, normalizedDemoApiUrl]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${normalizedDemoApiUrl}/api/demo/leads`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const payload = (await response.json()) as DemoLeadResponse;
      const nextResult: DemoState = {
        ...payload,
        reportReady: false,
        reportMagicUrl: null
      };
      writeStoredDemo(nextResult);
      setResult(nextResult);
    } catch {
      setError(copy.error);
    } finally {
      setSubmitting(false);
    }
  };

  const startNewDemo = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setResult(null);
    setError(null);
  };

  const trackEvent = (type: 'download_clicked' | 'report_opened') => {
    if (!activeResult) return;
    void fetch(`${normalizedDemoApiUrl}/api/demo/leads/${activeResult.leadId}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type })
    });
  };

  return (
    <section className={classes.hero}>
      <Container size="xl">
        <div className={classes.grid}>
          <Stack gap="xl">
            <Stack gap="md">
              <ThemeIcon size={58} radius="md" color="teal" variant="light">
                <IconShieldCheck size={32} />
              </ThemeIcon>
              <Title order={1} className={classes.title}>
                {copy.title}
              </Title>
              <Text size="lg" c="dimmed" className={classes.lead}>
                {copy.lead}
              </Text>
            </Stack>

            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              {copy.steps.map((step, index) => (
                <Box key={step} className={classes.step}>
                  <span>{index + 1}</span>
                  <Text fw={700}>{step}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>

          <Box className={classes.panel}>
            {activeResult ? (
              <Stack gap="md">
                <ThemeIcon size={52} radius="md" color="teal" variant="light">
                  <IconSchool size={28} />
                </ThemeIcon>
                <Stack gap={4}>
                  <Title order={2}>{copy.success}</Title>
                  <Text c="dimmed">Lead ID: {activeResult.leadId}</Text>
                  <Text c="dimmed">{copy.successLead}</Text>
                </Stack>

                <Stack gap="sm">
                  <DemoAction
                    number={1}
                    title={copy.downloadFirst}
                    href={activeResult.downloadUrl}
                    icon={<IconDownload size={18} />}
                    onClick={() => trackEvent('download_clicked')}
                  />
                  <DemoAction
                    number={2}
                    title={copy.openDemoInstalled}
                    href={activeResult.studentDemoUrl}
                    icon={<IconExternalLink size={18} />}
                  />
                  <DemoAction
                    number={3}
                    title={copy.viewReport}
                    href={activeResult.reportReady && activeResult.reportMagicUrl ? activeResult.reportMagicUrl : null}
                    icon={<IconArrowRight size={18} />}
                    status={activeResult.reportReady ? copy.reportReady : copy.reportWaiting}
                    onClick={() => trackEvent('report_opened')}
                  />
                </Stack>

                <Button variant="subtle" leftSection={<IconRefresh size={18} />} onClick={startNewDemo}>
                  {copy.startNew}
                </Button>
              </Stack>
            ) : (
              <form onSubmit={submit}>
                <Stack gap="md">
                  <TextInput
                    label={copy.name}
                    required
                    value={values.name}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      setValues((current) => ({ ...current, name: value }));
                    }}
                  />
                  <TextInput
                    label={copy.university}
                    required
                    value={values.university}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      setValues((current) => ({ ...current, university: value }));
                    }}
                  />
                  <TextInput
                    label={copy.email}
                    required
                    type="email"
                    value={values.email}
                    onChange={(event) => {
                      const value = event.currentTarget.value;
                      setValues((current) => ({ ...current, email: value }));
                    }}
                  />
                  {result && isExpired(result) ? <Alert color="yellow">{copy.expired}</Alert> : null}
                  {error ? <Alert color="red">{error}</Alert> : null}
                  <Group justify="flex-end">
                    <Button type="submit" loading={submitting} rightSection={<IconArrowRight size={18} />}>
                      {submitting ? copy.loading : copy.submit}
                    </Button>
                  </Group>
                </Stack>
              </form>
            )}
          </Box>
        </div>
      </Container>
    </section>
  );
}

function DemoAction({
  number,
  title,
  href,
  icon,
  status,
  onClick
}: {
  number: number;
  title: string;
  href: string | null;
  icon: ReactNode;
  status?: string;
  onClick?: () => void;
}) {
  return (
    <Box className={classes.action}>
      <span>{number}</span>
      <Stack gap={2} className={classes.actionCopy}>
        <Text fw={800}>{title}</Text>
        {status ? <Text c="dimmed">{status}</Text> : null}
      </Stack>
      <Button
        component="a"
        href={href ?? undefined}
        target="_blank"
        rel="noreferrer"
        leftSection={icon}
        disabled={!href}
        onClick={onClick}
      >
        {title}
      </Button>
    </Box>
  );
}
