import { NavLink } from '@mantine/core';
import {
  IconCalendarEvent,
  IconFileDescription,
  IconId,
  IconPill,
  IconReportMedical,
  IconScan,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    label: 'My Appointments',
    to: '/appointments',
    icon: IconCalendarEvent,
  },
  {
    label: 'Lab Results',
    to: '/lab-results',
    icon: IconReportMedical,
  },
  {
    label: 'Imaging Results',
    to: '/imaging-results',
    icon: IconScan,
  },
  {
    label: 'Prescriptions',
    to: '/prescriptions',
    icon: IconPill,
  },
  {
    label: 'Documents',
    to: '/documents',
    icon: IconFileDescription,
  },
  {
    label: 'My Profile',
    to: '/profile',
    icon: IconId,
  },
];

export function PatientMenu() {
  const location = useLocation();

  return (
    <>
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.to}
            component={Link}
            to={item.to}
            label={item.label}
            active={location.pathname === item.to}
            leftSection={<Icon size={20} aria-hidden="true" />}
            color="brand"
            variant="light"
          />
        );
      })}
    </>
  );
}
