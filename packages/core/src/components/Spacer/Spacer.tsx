import {css} from 'styled-components';
import {CustomMedia} from '../../styles/variables';

export const SpacerStyle = css<{
  mobile: string;
  tablet: string;
  desktop: string;
}>`
  ${({mobile}): string => mobile}

  @media (${CustomMedia.Tablet}) {
    ${({tablet}): string => tablet}
  }

  @media (${CustomMedia.Desktop}) {
    ${({desktop}): string => desktop}
  }
`;

const spaceDefMap: {[type: string]: string | string[]} = {
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  mv: ['margin-top', 'margin-bottom'],
  mh: ['margin-right', 'margin-left'],
  p: 'padding',
  pt: 'padding-top',
  pr: 'padding-right',
  pb: 'padding-bottom',
  pl: 'padding-left',
  pv: ['padding-top', 'padding-bottom'],
  ph: ['padding-right', 'padding-left'],
};

interface SpaceDef {
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  pv?: number;
  ph?: number;
}

export function createSpace(def: SpaceDef | undefined): string {
  if (def == null) {
    return '';
  }

  return Object.keys(def)
    .map(type =>
      (
        (Array.isArray(spaceDefMap[type])
          ? spaceDefMap[type]
          : [spaceDefMap[type]]) as string[]
      )
        .map(prop => `${prop}: ${(def as any)[type]}px;`)
        .join('')
    )
    .join('');
}
