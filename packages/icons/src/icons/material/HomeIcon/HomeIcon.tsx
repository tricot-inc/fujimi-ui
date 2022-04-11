import React from 'react';
import {Color} from '@fujimi/ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const HomeIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill={color} />
    </svg>
  );
};
