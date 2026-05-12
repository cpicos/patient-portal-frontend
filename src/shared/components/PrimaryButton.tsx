import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';

export type PrimaryButtonProps = ButtonProps & {
  label?: string;
};

export function PrimaryButton({
  children,
  label,
  color = 'brand',
  variant = 'filled',
  size = 'md',
  ...props
}: PrimaryButtonProps) {
  return (
    <Button color={color} variant={variant} size={size} {...props}>
      {children ?? label}
    </Button>
  );
}
