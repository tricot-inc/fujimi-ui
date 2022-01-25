import React from 'react';
import styled from 'styled-components';
import {CustomMedia} from '../../styles/variables';

type Config = {
  order?: number;
};

const Wrapper = styled.div<{
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

export type Props<T extends keyof JSX.IntrinsicElements = 'div'> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    mobile?: Config;
    tablet?: Config;
    desktop?: Config;
    children?: React.ReactNode;
  };

/**
 * NOTE `React.FC` が Generics を使用できないため仕方なく使っていない
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Item = <T extends keyof JSX.IntrinsicElements>({
  children,
  ...rest
}: Props<T>) => <Wrapper {...rest}>{children}</Wrapper>;
