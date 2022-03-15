import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Link} from '../Link';
import {ButtonColor, colorMap} from './color-map';
import {LinkProps} from 'next/link';
import {LoadingIcon} from '@tricot-inc/fujimi-ui-icons';
import {
  ButtonStyle,
  ButtonLeftIcon,
  ButtonRightIcon,
  Color,
  Typography,
} from '@tricot-inc/fujimi-ui-core';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}
interface WrapperProps {
  typography: TypographyViewPort;
  height: string | number;
  normal: {
    background: string;
    color: string;
    border?: string;
  };
  hover: {
    background?: string;
    color?: string;
    border?: string;
  };
  focus: {
    background?: string;
    border?: string;
  };
}

export type Size = 'md' | 'lg';

const ButtonWrapper = styled.button<WrapperProps>`
  ${ButtonStyle}
`;

export const LeftIconWrapper = styled.span`
  ${ButtonLeftIcon};
`;

export const RightIconWrapper = styled.span`
  ${ButtonRightIcon};
`;

export type Props = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  size?: Size;
  color?: ButtonColor;
  typography?: TypographyViewPort;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  href?: LinkProps['href'];
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
};

export const heightMap = {
  lg: 64,
  md: 48,
} as const;

const BaseButton: React.VFC<Props> = ({
  color = 'primary',
  size = 'md',
  typography = {mobile: Typography.SF_NORMAL_14},
  children,
  icon,
  disabled = false,
  loading = false,
  ...rest
}) => {
  const colorStyle = colorMap[color as ButtonColor];
  const height = heightMap[size as Size];

  return (
    <ButtonWrapper
      {...rest}
      disabled={disabled || loading}
      height={height}
      normal={colorStyle.normal}
      hover={colorStyle.hover}
      focus={colorStyle.focus}
      typography={typography as TypographyViewPort}
    >
      {icon?.left != null && <LeftIconWrapper>{icon.left}</LeftIconWrapper>}
      {loading ? (
        <LoadingIcon
          color={Color.WHITE.WHITE_100}
          height={size === 'md' ? 10 : 15}
          width={size === 'md' ? 10 : 15}
        />
      ) : (
        children
      )}
      {icon?.right != null && <RightIconWrapper>{icon.right}</RightIconWrapper>}
    </ButtonWrapper>
  );
};

export const Button: React.VFC<Props> = ({
  typography = {mobile: Typography.SF_NORMAL_14},
  href,
  target,
  disabled = false,
  loading = false,
  ...rest
}) => {
  if (href != null) {
    return (
      <Link href={href} target={target}>
        <BaseButton
          {...rest}
          disabled={disabled || loading}
          typography={typography as TypographyViewPort}
        />
      </Link>
    );
  }

  return (
    <BaseButton
      {...rest}
      disabled={disabled || loading}
      typography={typography as TypographyViewPort}
    />
  );
};
