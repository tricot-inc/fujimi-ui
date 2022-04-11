import React from 'react';
import {Color} from '@fujimi/ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const BarArrowDownIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <title>{title}</title>
      <path
        d="M13 2.00024V30.0002L19 20.3451"
        stroke={color}
        strokeLinejoin="round"
      />
    </svg>
  );
};
