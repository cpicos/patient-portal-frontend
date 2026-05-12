import type { ReactNode } from 'react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { AppShellLayout } from '../shared/layout/AppShellLayout';
import { PatientMenu } from './navigation';

const dummySessionKey = 'patient-portal:dummy-session';

export function PatientAppLayout({ children }: { children: ReactNode }) {
  const handleSignOut = () => {
    localStorage.removeItem(dummySessionKey);
  };

  return (
    <AppShellLayout
      navbar={<PatientMenu />}
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
      {children}
    </AppShellLayout>
  );
}
