import { Box, Paper, Stack, Text, Title } from '@mantine/core';
import { AppLogo } from '../../shared/components/AppLogo';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <Box
      component="main"
      mih="100svh"
      px={{ base: 'md', sm: 'xl' }}
      py={{ base: 'xl', sm: 56 }}
      bg="neutral.1"
      style={{
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Paper
        withBorder
        shadow="md"
        radius="lg"
        p={{ base: 'lg', sm: 'xl' }}
        w="100%"
        maw={480}
        bg="neutral.0"
        style={{
          borderColor: 'var(--mantine-color-neutral-8)',
        }}
      >
        <Stack gap="xl">
          <Stack gap="md" align="center">
            <AppLogo />
            <Stack gap={6} align="center">
              <Title order={1} ta="center" c="neutral.9" fz={{ base: 30, sm: 36 }}>
                Welcome back
              </Title>
              <Text ta="center" c="neutral.7" size="lg" maw={360}>
                Sign in with your email and password to access your patient portal.
              </Text>
            </Stack>
          </Stack>

          <LoginForm />
        </Stack>
      </Paper>
    </Box>
  );
}
