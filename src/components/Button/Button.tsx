import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Color, Radius, Typography, CustomMedia} from '../../styles/variables';
import {Link} from '../Link';
import {ButtonColor, colorMap} from './color-map';
import {LinkProps} from 'next/link';
import {LoadingIcon} from '../../icons/fujimi/LoadingIcon';

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props): string | number =>
    typeof props.height === 'number' ? `${props.height}px` : props.height};
  border: ${(props): string | number =>
    props.normal.border != null ? `1px solid ${props.normal.border}` : 0};
  border-radius: ${Radius.SMALL};
  background: ${(props): string => props.normal.background};
  color: ${(props): string => props.normal.color};
  text-align: center;
  cursor: pointer;
  ${(props): FlattenSimpleInterpolation | undefined => props.typography.mobile}

  &:hover {
    border: ${(props): string | number =>
      props.hover.border != null ? `1px solid ${props.hover.border}` : 0};
    background: ${(props): string | undefined => props.hover.background};
    color: ${(props): string | undefined => props.hover.color};
  }

  &:focus {
    outline: none;
    border: ${(props): string | number =>
      props.focus.border != null ? `1px solid ${props.focus.border}` : 0};
    background: ${(props): string | undefined => props.focus.background};
  }

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.2;
  }

  @media (${CustomMedia.Tablet}) {
    ${(props): FlattenSimpleInterpolation | undefined =>
      props.typography.tablet}
  }

  @media (${CustomMedia.Desktop}) {
    ${(props): FlattenSimpleInterpolation | undefined =>
      props.typography.desktop}
  }
`;

export const LeftIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 20px;
  display: flex;
  align-content: center;
  transform: translateY(-50%);
`;

export const RightIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  display: flex;
  align-content: center;
  transform: translateY(-50%);
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
