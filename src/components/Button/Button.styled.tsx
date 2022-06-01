import styled from 'styled-components';
import theme from '../../shared/theme';
import { ButtonStyledProps } from '../../types/button.types';
import { getColorType, resetStyle } from '../../utils/common.utils';
import {
  getButtonSizeStyle,
  getVariantStyle,
  getVariantHoverStyle,
} from '../../utils/buttons.utils';

export const StyledButton = styled.button<ButtonStyledProps>`
  ${resetStyle('button')}

  position: relative;
  overflow: hidden;
  border-radius: ${({ shape }) => (shape === 'rect' ? '0' : '6px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};

  // size
  ${({ size }) => {
    return getButtonSizeStyle(size);
  }}

  // Variant color
  ${({ color, variant }) => {
    return getVariantStyle(color, variant);
  }}

  // Variant hover
  &:hover {
    ${({ color, variant }) => {
      return getVariantHoverStyle(color, variant);
    }}
  }

  // effect
  &.active::after {
    position: absolute;
    content: '';
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ripple 0.4s;
    background-color: ${({ color, variant }) => {
      if (variant === 'contained') return getColorType(color).light;
      return getColorType(color).hover;
    }};
  }

  // disabled
  &:disabled {
    background-color: ${theme.colors.gray[10]};
    border: 1px solid ${theme.colors.gray[300]};
    color: ${theme.colors.gray[300]};
  }

  // ripple animation
  @keyframes ripple {
    from {
      width: 0;
      opacity: 0.3;
    }
    to {
      width: 150%;
      opacity: 0.1;
    }
  }
`;
