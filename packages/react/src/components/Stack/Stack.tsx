import React from 'react';
import styled from 'styled-components';
import {Alignment, StackStyle} from '@fujimi/ui-core';
import {Item} from './Item';

type Config = {
  gap?: number;
  horizontal?: boolean;
  wrap?: boolean;
  vAlign?: Alignment;
  hAlign?: Alignment;
};

const Wrapper = styled.div<{
  mobile?: Config;
  tablet?: Config;
  desktop?: Config;
}>`
  ${StackStyle};
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
export const Stack = <T extends keyof JSX.IntrinsicElements>({
  children,
  ...rest
}: Props<T>) => <Wrapper {...rest}>{children}</Wrapper>;

Stack.Item = Item;
