import {FlattenSimpleInterpolation, css} from 'styled-components';
import {
  TextAlign,
  LineHeight,
  LetterSpacing,
  CustomMedia,
} from '../../styles/variables';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export const TextStyle = css<{
  block: boolean;
  color: string;
  align: TextAlign;
  lineHeight?: typeof LineHeight[keyof typeof LineHeight];
  letterSpacing?: typeof LetterSpacing[keyof typeof LetterSpacing];
  bold: boolean;
  typography: TypographyViewPort;
}>`
  display: ${({block}): string => (block ? 'block' : 'inline-block')};
  color: ${({color}): string => color};
  text-align: ${({align}): string => align};
  font-weight: ${({bold}): string => (bold ? 'bold' : 'normal')};
  ${({typography}): FlattenSimpleInterpolation =>
    typography.mobile as FlattenSimpleInterpolation}
  ${({lineHeight}): string | false =>
    lineHeight != null && `line-height: ${lineHeight};`}
  ${({letterSpacing}): string | false =>
    letterSpacing != null && `letter-spacing: ${letterSpacing};`}
  
  @media(${CustomMedia.Tablet}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.tablet}
  }

  @media (${CustomMedia.Desktop}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.desktop}
  }
`;
