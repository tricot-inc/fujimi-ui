import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {
  Color,
  TextAlign,
  Typography,
  LineHeight,
  LetterSpacing,
  TextStyle,
} from '@tricot-inc/fujimi-ui-core';

const Wrapper = styled.span<{
  block: boolean;
  color: string;
  align: TextAlign;
  lineHeight?: typeof LineHeight[keyof typeof LineHeight];
  letterSpacing?: typeof LetterSpacing[keyof typeof LetterSpacing];
  bold: boolean;
  typography: TypographyViewPort;
}>`
  ${TextStyle};
`;

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  block?: boolean;
  bold?: boolean;
  color?: string;
  align?: TextAlign;
  lineHeight?: typeof LineHeight[keyof typeof LineHeight];
  letterSpacing?: typeof LetterSpacing[keyof typeof LetterSpacing];
  typography?: TypographyViewPort;
  children?: React.ReactNode;
};

export const Text: React.VFC<Props> = ({
  block,
  color,
  align,
  bold,
  typography,
  children,
  ...rest
}) => (
  <Wrapper
    {...rest}
    block={block as boolean}
    color={color}
    align={align as TextAlign}
    bold={bold as boolean}
    typography={typography as TypographyViewPort}
  >
    {children}
  </Wrapper>
);

Text.defaultProps = {
  as: 'span',
  block: false,
  bold: false,
  color: Color.GRAY_ALPHA.GRAY_90,
  align: 'left',
  typography: {mobile: Typography.SF_NORMAL_16},
};
