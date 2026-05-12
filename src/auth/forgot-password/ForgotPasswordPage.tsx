import { Anchor, Box, Paper, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../shared/components/AppLogo';

export function ForgotPasswordPage() {
  return (
    <Box component="main" mih="100svh" px="md" py="xl" bg="neutral.1">
      <Paper withBorder maw={480} mx="auto" mt={{ base: 48, sm: 96 }} p="xl">
        <Stack gap="lg">
          <AppLogo />
          <Stack gap={6}>
            <Title order={1} c="neutral.9">
              Forgot Password
            </Title>
            <Text c="neutral.7">
              Password recovery flow placeholder for the patient portal.
            </Text>
          </Stack>
          <Anchor component={Link} to="/auth/login" c="brand.8" fw={700}>
            Back to Sign In
          </Anchor>
        </Stack>
      </Paper>
    </Box>
  );
}
