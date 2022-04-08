import React from 'react';
import {Color} from 'fujimi-ui';

export type Props = React.ComponentPropsWithoutRef<'svg'> & {
  title?: string;
  color?: string;
};

export const BlockIcon: React.VFC<Props> = ({
  color = Color.Primary.GRAY_50,
  title = '',
  ...rest
}) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...rest}>
      <title>{title}</title>
      <circle cx="12" cy="12" r="7.4" stroke={color} strokeWidth="1.2" />
      <path
        d="M17 8L7 16"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
