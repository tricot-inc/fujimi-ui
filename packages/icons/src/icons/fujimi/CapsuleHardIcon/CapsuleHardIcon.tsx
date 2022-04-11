import React from 'react';
import {Color} from '@fujimi/ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const CapsuleHardIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <rect
        x="8.6"
        y="2.6"
        width="6.8"
        height="18.8"
        rx="3.4"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12H15" stroke={color} strokeWidth="1.2" />
    </svg>
  );
};
