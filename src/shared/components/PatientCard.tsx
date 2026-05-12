import type { CardProps } from '@mantine/core';
import { Avatar, Badge, Card, Group, Stack, Text } from '@mantine/core';

export type PatientCardProps = Omit<CardProps, 'children'> & {
  name: string;
  patientId: string;
  appointmentDate?: string;
  status?: string;
  initials?: string;
};

export function PatientCard({
  name,
  patientId,
  appointmentDate,
  status = 'Active',
  initials,
  ...props
}: PatientCardProps) {
  const avatarInitials =
    initials ??
    name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');

  return (
    <Card withBorder p="lg" {...props}>
      <Group justify="space-between" align="flex-start" gap="md">
        <Group gap="md" wrap="nowrap">
          <Avatar color="brand" radius="xl" size={48}>
            {avatarInitials}
          </Avatar>

          <Stack gap={2}>
            <Text fw={700} c="neutral.9">
              {name}
            </Text>
            <Text size="sm" c="neutral.6">
              Patient ID: {patientId}
            </Text>
            {appointmentDate ? (
              <Text size="sm" c="neutral.7">
                Next appointment: {appointmentDate}
              </Text>
            ) : null}
          </Stack>
        </Group>

        <Badge color="brand" variant="light" radius="md">
          {status}
        </Badge>
      </Group>
    </Card>
  );
}
