import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Color, TextAlign, Typography, LinkStyle} from '@tricot-inc/fujimi-ui';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export interface Props extends React.ComponentPropsWithoutRef<'a'> {
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
  ${LinkStyle}
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
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

Link.defaultProps = {
  bold: false,
  color: Color.GRAY_ALPHA.GRAY_60,
  align: 'left',
  typography: {mobile: Typography.SF_NORMAL_16},
  underline: {normal: false, hover: false},
};
