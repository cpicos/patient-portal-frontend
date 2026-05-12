import { Group, Text, ThemeIcon, rem } from '@mantine/core';
import { IconHeartbeat } from '@tabler/icons-react';

export type AppLogoProps = {
  label?: string;
  subtitle?: string;
};

export function AppLogo({
  label = 'Patient Portal',
  subtitle = 'Healthcare',
}: AppLogoProps) {
  return (
    <Group gap="sm" wrap="nowrap">
      <ThemeIcon
        size={42}
        radius="md"
        color="brand"
        variant="filled"
        aria-hidden="true"
      >
        <IconHeartbeat size={24} stroke={2.2} />
      </ThemeIcon>

      <div>
        <Text
          fw={700}
          lh={1.1}
          c="neutral.9"
          style={{ fontSize: rem(16) }}
        >
          {label}
        </Text>
        <Text size="xs" c="neutral.6" lh={1.2}>
          {subtitle}
        </Text>
      </div>
    </Group>
  );
}
