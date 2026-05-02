'use client';

import { Badge, Box, Group, Progress, Stack, Text } from '@mantine/core';
import {
  IconCamera,
  IconCircleCheck,
  IconDeviceDesktop,
  IconFlag,
  IconLock
} from '@tabler/icons-react';
import classes from './HeroVisual.module.css';

export function HeroVisual() {
  return (
    <Box className={classes.visual} aria-label="Proctoring session dashboard preview">
      <Box className={classes.topbar}>
        <Group gap={8}>
          <span />
          <span />
          <span />
        </Group>
        <Text size="xs" fw={700}>
          Secure Exam Session
        </Text>
      </Box>

      <Box className={classes.screen}>
        <Stack gap="md">
          <Group justify="space-between">
            <Badge color="teal" variant="light" leftSection={<IconLock size={12} />}>
              Browser locked
            </Badge>
            <Text size="xs" c="dimmed" fw={700}>
              42:18
            </Text>
          </Group>

          <Box className={classes.candidate}>
            <Box className={classes.avatar}>
              <IconCamera size={28} />
            </Box>
            <Stack gap={3}>
              <Text fw={800}>Candidate verified</Text>
              <Text size="sm" c="dimmed">
                Face match and ID check passed
              </Text>
            </Stack>
          </Box>

          <Stack gap="xs">
            <Group justify="space-between">
              <Group gap={8}>
                <IconDeviceDesktop size={18} />
                <Text size="sm" fw={700}>
                  Screen activity
                </Text>
              </Group>
              <Text size="sm" fw={800} c="teal.7">
                Normal
              </Text>
            </Group>
            <Progress value={72} color="teal" radius="xl" />
          </Stack>

          <Box className={classes.eventList}>
            {[
              ['Identity confirmed', IconCircleCheck],
              ['Exam window active', IconCircleCheck],
              ['One attention flag', IconFlag]
            ].map(([label, Icon]) => (
              <Group key={label as string} justify="space-between" className={classes.event}>
                <Text size="sm" fw={650}>
                  {label as string}
                </Text>
                <Icon size={18} />
              </Group>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
