import {FlattenSimpleInterpolation, css} from 'styled-components';
import {Radius, CustomMedia} from '../../styles/variables';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

interface ButtonStyleProps {
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

export const ButtonStyle = css<ButtonStyleProps>`
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

export const ButtonLeftIcon = css`
  position: absolute;
  top: 50%;
  left: 20px;
  display: flex;
  align-content: center;
  transform: translateY(-50%);
`;

export const ButtonRightIcon = css`
  position: absolute;
  top: 50%;
  right: 20px;
  display: flex;
  align-content: center;
  transform: translateY(-50%);
`;

export const heightMap = {
  lg: 64,
  md: 48,
} as const;
