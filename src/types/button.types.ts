import { ComponentProps } from 'react';

type StyledPickType = 'shape' | 'fullWidth' | 'size' | 'color' | 'variant';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'ref' | 'children'> {
  children: React.ReactNode | string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'modern';
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rect' | 'round';
  fullWidth?: boolean;
}

export type ButtonStyledProps = Pick<ButtonProps, StyledPickType>;
