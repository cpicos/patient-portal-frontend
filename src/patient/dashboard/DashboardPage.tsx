import type { ReactNode } from 'react';
import { Badge, Button, Card, Group, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconCalendarEvent,
  IconChevronRight,
  IconHeartHandshake,
  IconMessageCircle,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { AppShellLayout } from '../../shared/layout/AppShellLayout';
import { PageHeader } from '../../shared/components/PageHeader';

const patient = {
  appointmentDate: 'May 20, 2026 at 10:30 AM',
};

const dummySessionKey = 'patient-portal:dummy-session';

const coverages = [
  { name: 'Medical Plan', status: 'Active', detail: 'Primary coverage' },
  { name: 'Pharmacy Benefits', status: 'Active', detail: 'Copay available' },
];

const messages = [
  {
    from: 'Care Team',
    subject: 'Lab results are ready',
    receivedAt: 'Today',
    unread: true,
  },
  {
    from: 'Billing Office',
    subject: 'Statement review completed',
    receivedAt: 'Yesterday',
    unread: false,
  },
];

function DashboardCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card withBorder p="lg" mih={260}>
      <Stack gap="md" h="100%">
        <Group justify="space-between" align="center" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon color="brand" variant="light" size={42} radius="md">
              {icon}
            </ThemeIcon>
            <Title order={2} c="neutral.9" fz={22}>
              {title}
            </Title>
          </Group>

          <IconChevronRight size={20} color="var(--mantine-color-neutral-6)" aria-hidden="true" />
        </Group>

        {children}
      </Stack>
    </Card>
  );
}

export function DashboardPage() {
  const handleSignOut = () => {
    localStorage.removeItem(dummySessionKey);
  };

  return (
    <AppShellLayout
      userMenu={
        <Button
          component={Link}
          to="/auth/login"
          variant="light"
          color="brand"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      }
    >
      <Stack gap="xl">
        <PageHeader
          title="Patient Dashboard"
          description="Coverage, next appointment, and care team messages."
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <DashboardCard
            title="Coverage"
            icon={<IconHeartHandshake size={24} aria-hidden="true" />}
          >
            <Stack gap="sm">
              {coverages.map((coverage) => (
                <Group key={coverage.name} justify="space-between" align="flex-start" wrap="nowrap">
                  <Stack gap={2}>
                    <Text fw={700} c="neutral.9">
                      {coverage.name}
                    </Text>
                    <Text size="sm" c="neutral.6">
                      {coverage.detail}
                    </Text>
                  </Stack>
                  <Badge color="green" variant="light" radius="md">
                    {coverage.status}
                  </Badge>
                </Group>
              ))}
            </Stack>
          </DashboardCard>

          <DashboardCard
            title="Next Appointment"
            icon={<IconCalendarEvent size={24} aria-hidden="true" />}
          >
            <Stack gap="xs">
              <Text fw={700} c="neutral.9" fz={18}>
                Primary care follow-up
              </Text>
              <Text c="neutral.7">{patient.appointmentDate}</Text>
              <Text size="sm" c="neutral.6">
                Dr. Elena Rivera - Suite 204
              </Text>
              <Badge color="brand" variant="light" radius="md" w="fit-content">
                Confirmed
              </Badge>
            </Stack>
          </DashboardCard>

          <DashboardCard
            title="Messages"
            icon={<IconMessageCircle size={24} aria-hidden="true" />}
          >
            <Stack gap="sm">
              {messages.map((message) => (
                <Stack key={`${message.from}-${message.subject}`} gap={2}>
                  <Group justify="space-between" wrap="nowrap">
                    <Text fw={message.unread ? 800 : 700} c="neutral.9">
                      {message.from}
                    </Text>
                    <Text size="xs" c="neutral.6">
                      {message.receivedAt}
                    </Text>
                  </Group>
                  <Text size="sm" c="neutral.7">
                    {message.subject}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </DashboardCard>
        </SimpleGrid>
      </Stack>
    </AppShellLayout>
  );
}
