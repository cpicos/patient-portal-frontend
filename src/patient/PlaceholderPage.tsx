import { Card, Stack, Text } from '@mantine/core';
import { PatientAppLayout } from './PatientAppLayout';
import { PageHeader } from '../shared/components/PageHeader';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <PatientAppLayout>
      <Stack gap="xl">
        <PageHeader title={title} description="This section is coming soon." />

        <Card withBorder p="lg">
          <Text c="neutral.7">
            Patient information for this section will appear here.
          </Text>
        </Card>
      </Stack>
    </PatientAppLayout>
  );
}
