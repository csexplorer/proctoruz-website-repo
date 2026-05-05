'use client';

import { useState } from 'react';
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
import { IconArrowRight, IconDownload, IconSchool, IconShieldCheck } from '@tabler/icons-react';
import classes from './demo.module.css';

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
  openDemo: string;
  openDemoInstalled: string;
  download: string;
  downloadFirst: string;
  error: string;
  steps: string[];
};

type DemoLeadResponse = {
  leadId: string;
  studentDemoUrl: string;
  downloadUrl: string;
  expiresAt: number;
};

export function DemoClient({ copy, demoApiUrl }: { copy: Copy; demoApiUrl: string }) {
  const [values, setValues] = useState({ name: '', university: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<DemoLeadResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${demoApiUrl.replace(/\/$/, '')}/api/demo/leads`, {
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

      setResult((await response.json()) as DemoLeadResponse);
    } catch {
      setError(copy.error);
    } finally {
      setSubmitting(false);
    }
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
            {result ? (
              <Stack gap="md">
                <ThemeIcon size={52} radius="md" color="teal" variant="light">
                  <IconSchool size={28} />
                </ThemeIcon>
                <Stack gap={4}>
                  <Title order={2}>{copy.success}</Title>
                  <Text c="dimmed">Lead ID: {result.leadId}</Text>
                  <Text c="dimmed">{copy.successLead}</Text>
                </Stack>
                <Button
                  component="a"
                  href={result.downloadUrl}
                  leftSection={<IconDownload size={18} />}
                  size="md"
                  onClick={() => {
                    void fetch(`${demoApiUrl.replace(/\/$/, '')}/api/demo/leads/${result.leadId}/events`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ type: 'download_clicked' })
                    });
                  }}
                >
                  {copy.downloadFirst}
                </Button>
                <Button
                  component="a"
                  href={result.studentDemoUrl}
                  rightSection={<IconArrowRight size={18} />}
                  variant="light"
                >
                  {copy.openDemoInstalled}
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
