import type { ReactNode } from 'react';
import {
  AppShell,
  Burger,
  Container,
  Group,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppLogo } from '../components/AppLogo';

export type AppShellLayoutProps = {
  children: ReactNode;
  headerActions?: ReactNode;
  navbar?: ReactNode;
  userMenu?: ReactNode;
};

export function AppShellLayout({
  children,
  headerActions,
  navbar,
  userMenu,
}: AppShellLayoutProps) {
  const [opened, { close, toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={
        navbar
          ? {
              width: 280,
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
            }
          : undefined
      }
      padding="lg"
      styles={{
        main: {
          background: theme.colors.neutral[1],
        },
        header: {
          borderBottomColor: theme.colors.neutral[2],
        },
        navbar: {
          borderRightColor: theme.colors.neutral[2],
          background: theme.white,
        },
      }}
    >
      <AppShell.Header px="lg">
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Group gap="md" wrap="nowrap">
            {navbar ? (
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                aria-label="Toggle navigation"
              />
            ) : null}
            <AppLogo />
          </Group>

          <Group gap="sm" wrap="nowrap">
            {headerActions}
            {userMenu}
          </Group>
        </Group>
      </AppShell.Header>

      {navbar ? (
        <AppShell.Navbar p="md" onClick={close}>
          <Stack gap="xs">{navbar}</Stack>
        </AppShell.Navbar>
      ) : null}

      <AppShell.Main>
        <Container size="xl" px={0}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
