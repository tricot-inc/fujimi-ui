import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import NextLink, {LinkProps} from 'next/link';
import {
  Color,
  TextAlign,
  Typography,
  CustomMedia,
} from '../../styles/variables';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export interface Props extends LinkProps {
  id?: string;
  target?: string;
  rel?: string;
  underline?: {
    normal?: boolean;
    hover?: boolean;
  };
  bold?: boolean;
  color?: string;
  align?: TextAlign;
  typography?: TypographyViewPort;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  tabIndex?: number;
  children: React.ReactNode;
}

const Wrapper = styled.a<{
  color: string;
  align: TextAlign;
  bold: boolean;
  typography: TypographyViewPort;
  underline: {
    normal: boolean;
    hover: boolean;
  };
}>`
  width: 100%;
  color: ${({color}): string => color};
  text-align: ${({align}): string => align};
  text-decoration: ${({underline}): string =>
    underline.normal ? 'underline' : 'none'};
  font-weight: ${({bold}): string => (bold ? 'bold' : 'normal')};
  ${({typography}): FlattenSimpleInterpolation | undefined => typography.mobile}
  &:hover {
    text-decoration: ${({underline}): string =>
      underline.hover ? 'underline' : 'none'};
  }
  @media (${CustomMedia.Tablet}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.tablet}
  }
  @media (${CustomMedia.Desktop}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.desktop}
  }
`;

export const Link: React.VFC<Props> = ({
  color,
  align,
  bold,
  typography,
  underline,
  children,
  onClick,
  target,
  rel,
  tabIndex,
  id,
  ...rest
}) => {
  return (
    <NextLink {...rest} passHref>
      <Wrapper
        id={id}
        color={color as string}
        align={align as TextAlign}
        underline={underline as {normal: boolean; hover: boolean}}
        bold={bold as boolean}
        typography={typography as TypographyViewPort}
        onClick={onClick}
        target={target}
        rel={target === '_blank' && rel == null ? 'noopener noreferrer' : rel}
        tabIndex={tabIndex}
      >
        {children}
      </Wrapper>
    </NextLink>
  );
};

Link.defaultProps = {
  bold: false,
  color: Color.GRAY_ALPHA.GRAY_60,
  align: 'left',
  typography: {mobile: Typography.SF_NORMAL_16},
  underline: {normal: false, hover: false},
};
