import {css} from 'styled-components';
import {CustomMedia} from '../../styles/variables';

type Config = {
  order?: number;
};

export const StackItemStyle = css<{
  mobile?: Config;
  tablet?: Config;
  desktop?: Config;
}>`
  order: ${({mobile}): number | undefined =>
    mobile != null ? mobile.order : undefined};

  @media (${CustomMedia.Tablet}) {
    order: ${({tablet}): number | undefined =>
      tablet != null ? tablet.order : undefined};
  }

  @media (${CustomMedia.Desktop}) {
    order: ${({desktop}): number | undefined =>
      desktop != null ? desktop.order : undefined};
  }
`;
