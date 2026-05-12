import { Anchor, Checkbox, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconLock, IconMail } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../shared/components/PrimaryButton';

const rememberedEmailKey = 'patient-portal:remembered-email';
const dummySessionKey = 'patient-portal:dummy-session';

const dummyUser = {
  email: 'patient@example.com',
  password: 'Password123',
  name: 'Test Patient',
};

type LoginFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export function LoginForm() {
  const navigate = useNavigate();
  const savedEmail = localStorage.getItem(rememberedEmailKey) ?? '';

  const form = useForm<LoginFormValues>({
    initialValues: {
      email: savedEmail || dummyUser.email,
      password: dummyUser.password,
      rememberMe: Boolean(savedEmail),
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : 'Enter a valid email address',
      password: (value) =>
        value.length >= 8 ? null : 'Password must be at least 8 characters',
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    const isDummyUser =
      values.email === dummyUser.email && values.password === dummyUser.password;

    if (!isDummyUser) {
      notifications.show({
        title: 'Invalid credentials',
        message: `Use ${dummyUser.email} / ${dummyUser.password} for this dummy login.`,
        color: 'red',
      });
      return;
    }

    if (values.rememberMe) {
      localStorage.setItem(rememberedEmailKey, values.email);
    } else {
      localStorage.removeItem(rememberedEmailKey);
    }

    localStorage.setItem(
      dummySessionKey,
      JSON.stringify({
        email: dummyUser.email,
        name: dummyUser.name,
        token: 'dummy-auth-token',
        signedInAt: new Date().toISOString(),
      }),
    );

    notifications.show({
      title: 'Signed in',
      message: `Welcome back, ${dummyUser.name}.`,
      color: 'green',
    });

    navigate('/auth/mfa');
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        <TextInput
          label="Email"
          placeholder="name@example.com"
          autoComplete="email"
          inputMode="email"
          leftSection={<IconMail size={22} aria-hidden="true" />}
          size="lg"
          radius="md"
          styles={{
            label: { color: 'var(--mantine-color-neutral-9)', fontWeight: 700 },
            input: {
              minHeight: 56,
              borderColor: 'var(--mantine-color-neutral-8)',
              color: 'var(--mantine-color-neutral-9)',
              fontSize: 18,
            },
          }}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          leftSection={<IconLock size={22} aria-hidden="true" />}
          size="lg"
          radius="md"
          styles={{
            label: { color: 'var(--mantine-color-neutral-9)', fontWeight: 700 },
            input: {
              minHeight: 56,
              borderColor: 'var(--mantine-color-neutral-8)',
              color: 'var(--mantine-color-neutral-9)',
              fontSize: 18,
            },
            innerInput: {
              fontSize: 18,
            },
          }}
          {...form.getInputProps('password')}
        />

        <Checkbox
          label="Remember me"
          size="md"
          color="brand"
          styles={{
            label: {
              color: 'var(--mantine-color-neutral-9)',
              fontSize: 16,
              fontWeight: 600,
            },
            input: {
              borderColor: 'var(--mantine-color-neutral-8)',
            },
          }}
          {...form.getInputProps('rememberMe', { type: 'checkbox' })}
        />

        <PrimaryButton type="submit" fullWidth size="lg">
          Sign In
        </PrimaryButton>

        <Anchor
          component={Link}
          to="/auth/forgot-password"
          c="brand.8"
          fw={700}
          ta="center"
          size="md"
        >
          Forgot Password
        </Anchor>
      </Stack>
    </form>
  );
}
