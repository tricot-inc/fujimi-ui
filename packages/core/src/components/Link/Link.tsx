import {FlattenSimpleInterpolation, css} from 'styled-components';
import {TextAlign, CustomMedia} from '../../styles/variables';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export const LinkStyle = css<{
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
