import type { ReactNode } from 'react';
import { Group, Stack, Text, Title } from '@mantine/core';

export type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <Group justify="space-between" align="flex-start" gap="lg">
      <Stack gap={4}>
        <Title order={1} c="neutral.9">
          {title}
        </Title>
        {description ? (
          <Text c="neutral.6" size="sm">
            {description}
          </Text>
        ) : null}
      </Stack>

      {actions ? (
        <Group gap="sm" justify="flex-end">
          {actions}
        </Group>
      ) : null}
    </Group>
  );
}
